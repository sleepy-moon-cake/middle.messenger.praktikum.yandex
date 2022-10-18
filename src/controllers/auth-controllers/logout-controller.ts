// import { router } from ".../../api/auth/logout-api
import { router } from "../..";
import { LogoutAPI } from "../../api/auth/logout-api";
import { ErrorResponse } from "../../api/types";
import { Options, ResponseType } from "../../services/http-service";

const logOutAPI = new LogoutAPI();

export class UserLogOutController {
  static async logOut(): Promise<void> {
    try {
      // Запускаем крутилку
      logOutAPI
        .create(prepareDataToRequest())
        .then((response: ErrorResponse | null) => {
          // Останавливаем крутилку
          if (response) {
            throw new Error(response.reason);
          }

          router.go("/");
        })
        .catch((error) => {
          console.error(error);
          // Останавливаем крутилку
          // Логика обработки ошибок
        });
    } catch (error) {
      console.error(error);
      // Логика обработки ошибок
    }
  }
}

function prepareDataToRequest(): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
  };
}
