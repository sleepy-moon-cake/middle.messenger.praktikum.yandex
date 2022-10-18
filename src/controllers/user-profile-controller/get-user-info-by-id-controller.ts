import { ErrorResponse } from "../../api/types";
import {
  GetUserInfoByIdAPI,
  UserInfoByIdResponse,
} from "../../api/user-profile/get-user-info-by-id-api";
import { Indexed } from "../../core/types";
import { ResponseType } from "../../services/http-service";
import { Options } from "../../services/http-service";

const getUserInfoByIdAPI = new GetUserInfoByIdAPI();

export class UserInfoByIdController {
  static async getInfo(userId: string): Promise<UserInfoByIdResponse | void> {
    try {
      // Запускаем крутилку
      return getUserInfoByIdAPI
        .get(getOptions(), userId)
        .then((response: UserInfoByIdResponse | ErrorResponse) => {
          // Останавливаем крутилку
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          return response;
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

function getOptions(): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
  };
}
