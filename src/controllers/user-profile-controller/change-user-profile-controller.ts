import { ErrorResponse } from "../../api/types";
import {
  ChangeUserProfileAPI,
  UserProfileResponse,
} from "../../api/user-profile/change-user-profile-api";
import { Indexed } from "../../core/types";
import { UPDATE_USER_PROFILE_EVENT_NAME } from "../../pages/settings/events";
import { SettingsPageProps } from "../../pages/settings/types";
import { Options, ResponseType } from "../../services/http-service";
import store from "../../store/store";

const validationKeys = [
  "first_name",
  "second_name",
  "display_name",
  "login",
  "email",
  "phone",
];

type UserProfileFormModel = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

const changeUserProfileAPI = new ChangeUserProfileAPI();

export class ChangeUserProfileController {
  static async changeData(data: Indexed): Promise<void> {
    try {
      // Запускаем крутилку
      const isValid = userProfileValidator(data);

      if (!isValid) {
        throw new Error(
          "Settings form data does not correspond to User Profile Form Model type"
        );
      }

      changeUserProfileAPI
        .put(prepareDataToRequest(data))
        .then((response: UserProfileResponse | ErrorResponse) => {
          // Останавливаем крутилку
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
          console.error(error, data);
          // Останавливаем крутилку
        });
    } catch (error) {
      console.error(error, data);
      // Останавливаем крутилку
    }
  }
}

function isErrorResponse(response: Indexed): response is ErrorResponse {
  return !!response?.reason;
}

function userProfileValidator(data: Indexed): data is UserProfileFormModel {
  const keysArray = Object.keys(data);

  return validationKeys.every((key: string) => keysArray.includes(key));
}

function prepareDataToRequest(data: UserProfileFormModel): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };
}

function prepareDataToStore(data: UserProfileResponse): SettingsPageProps {
  const state = store.getState();

  return {
    ...state.settingsPage,
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
  };
}
