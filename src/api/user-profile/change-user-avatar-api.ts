import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

export type UserAvatarResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

const userAvatarAPIInstance = new Http(`${HOST}/api/v2/user/profile/avatar`);

export class ChangeUserAvatarAPI extends BaseAPI {
  public put(options: Options): Promise<UserAvatarResponse | ErrorResponse> {
    return userAvatarAPIInstance
      .put<UserAvatarResponse | ErrorResponse>("", options)
      .then((data) => data);
  }
}
