import { ErrorResponse } from "../../api/types";
import {
  GetUserInfoAPI,
  UserInfoResponse,
} from "../../api/user-profile/get-user-info-api";
import { Options, ResponseType } from "../../services/http-service";

export type UserIdAndAvatarRequest = {
  id: number;
  avatar: string;
};

const getUserInfoAPI = new GetUserInfoAPI();

export class UserIdAndAvatarController {
  static async getIdAndAvatar(): Promise<UserIdAndAvatarRequest | void> {
    try {
      return getUserInfoAPI
        .get(getOptions())
        .then((response: UserInfoResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          return {
            id: response.id,
            avatar: response.avatar,
          };
        })
        .catch((error) => {
          throw new Error(error);
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
    responseType: ResponseType.json,
  };
}
