import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

export type UsersResponse = User[];

export type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

const getUsersAPIInstance = new Http(`${HOST}/api/v2/user/search`);

export class GetUsersAPI extends BaseAPI {
  public get(options: Options): Promise<UsersResponse | ErrorResponse> {
    return getUsersAPIInstance
      .post<UsersResponse | ErrorResponse>("", options)
      .then((data) => data);
  }
}
