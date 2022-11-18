import { ErrorResponse } from "../../api/types";
import { UserProfileResponse } from "../../api/user-profile/change-user-profile-api";
import {
  GetUserInfoAPI,
  UserInfoResponse,
} from "../../api/user-profile/get-user-info-api";
import { UPDATE_USER_PROFILE_EVENT_NAME } from "../../pages/settings/events";
import { SettingsPageProps } from "../../pages/settings/types";
import { Options, ResponseTypes } from "../../services/http-service";
import store from "../../store/store";
import { getAvatarLink } from "../../utils";

const getUserInfoAPI = new GetUserInfoAPI();

export class UserInfoController {
  static async getInfo(): Promise<void> {
    try {
      getUserInfoAPI
        .get(getOptions())
        .then((response: UserInfoResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          store.set(
            "settingsPage",
            prepareDataToStore(response),
            UPDATE_USER_PROFILE_EVENT_NAME
          );
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
}

function isErrorResponse(response: any): response is ErrorResponse {
  return !!response?.reason;
}

function getOptions(): Options {
  return {
    withCredentials: true,
    responseType: ResponseTypes.json,
  };
}

function prepareDataToStore(data: UserProfileResponse): SettingsPageProps {
  const state = store.getState();

  return {
    ...state.settingsPage,
    avatarImgSrc: getAvatarLink(data.avatar),
    nameInput: {
      ...state.settingsPage.nameInput,
      value: data.first_name,
    },
    surnameInput: {
      ...state.settingsPage.surnameInput,
      value: data.second_name,
    },
    displayNameInput: {
      ...state.settingsPage.displayNameInput,
      value: data.display_name,
    },
    loginInput: {
      ...state.settingsPage.loginInput,
      value: data.login,
    },
    emailInput: {
      ...state.settingsPage.emailInput,
      value: data.email,
    },
    phoneInput: {
      ...state.settingsPage.phoneInput,
      value: data.phone,
    },
    popupAvatar: {
      ...store.getState().settingsPage.popupAvatar,
      avatarImgSrc: getAvatarLink(data.avatar),
    },
  };
}
