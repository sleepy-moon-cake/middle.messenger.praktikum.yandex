import { ErrorResponse } from "../../api/types";
import {
  ChangeUserAvatarAPI,
  UserAvatarResponse,
} from "../../api/user-profile/change-user-avatar-api";
import { SETTINGS_PAGE_EVENT_NAME } from "../../pages/settings/events";
import { SettingsPageProps } from "../../pages/settings/types";
import { Options, ResponseType } from "../../services/http-service";
import store from "../../store/store";
import { getAvatarLink } from "../../utils";

const changeUserAvatarAPI = new ChangeUserAvatarAPI();

export class ChangeUserAvatarController {
  static async change(formData: FormData): Promise<void> {
    try {
      // Запускаем крутилку
      changeUserAvatarAPI
        .put(prepareDataToRequest(formData))
        .then((response: UserAvatarResponse | ErrorResponse) => {
          // Останавливаем крутилку
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          store.set(
            "settingsPage",
            prepareDataToStore(response),
            SETTINGS_PAGE_EVENT_NAME
          );
        })
        .catch((error) => {
          console.error(error);
          // Останавливаем крутилку
        });
    } catch (error) {
      console.error(error);
      // Останавливаем крутилку
    }
  }
}

function isErrorResponse(response: Indexed): response is ErrorResponse {
  return !!response?.reason;
}

function prepareDataToRequest(formData: FormData): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    data: formData,
  };
}

function prepareDataToStore(data: UserAvatarResponse): SettingsPageProps {
  const state = store.getState();

  URL.revokeObjectURL(state.settingsPage.popupAvatar.avatarImgSrc as string);

  return {
    ...state.settingsPage,
    avatarImgSrc: getAvatarLink(data.avatar),
    popupAvatar: {
      ...store.getState().settingsPage.popupAvatar,
      avatarImgSrc: getAvatarLink(data.avatar),
      avatarBlobImgSrc: null,
      changeAvatarButton: {
        ...store.getState().settingsPage.popupAvatar.changeAvatarButton,
        isDisabled: true,
      },
    },
  };
}
