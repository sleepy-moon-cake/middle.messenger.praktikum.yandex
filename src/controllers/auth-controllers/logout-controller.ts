import { router } from "../..";
import { LogoutAPI } from "../../api/auth/logout-api";
import { ErrorResponse } from "../../api/types";
import { Options, ResponseTypes } from "../../services/http-service";

const logOutAPI = new LogoutAPI();

export class UserLogOutController {
  static async logOut(): Promise<void> {
    try {
      logOutAPI
        .create(prepareDataToRequest())
        .then((response: ErrorResponse | null) => {
          if (response) {
            throw new Error(response.reason);
          }

          router.go("/");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
}

function prepareDataToRequest(): Options {
  return {
    withCredentials: true,
    responseType: ResponseTypes.json,
  };
}
