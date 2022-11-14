import { ErrorResponse } from "../../api/types";
import {
  GetUserInfoByIdAPI,
  UserInfoByIdResponse,
} from "../../api/user-profile/get-user-info-by-id-api";
import { ResponseTypes } from "../../services/http-service";
import { Options } from "../../services/http-service";

const getUserInfoByIdAPI = new GetUserInfoByIdAPI();

export class UserInfoByIdController {
  static async getInfo(userId: string): Promise<UserInfoByIdResponse | void> {
    try {
      return getUserInfoByIdAPI
        .get(getOptions(), userId)
        .then((response: UserInfoByIdResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          return response;
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
