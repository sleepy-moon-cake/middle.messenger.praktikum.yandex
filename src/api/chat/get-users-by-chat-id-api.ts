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
  role: string;
};

const getUsersByChatIdAPIInstance = new Http(`${HOST}/api/v2/chats/`);

export class GetUsersByChatIdAPI extends BaseAPI {
  public get(options: Options, chatId: number): Promise<UsersResponse | ErrorResponse> {
    return getUsersByChatIdAPIInstance
      .get<UsersResponse | ErrorResponse>(`${chatId}/users`, options)
      .then((data) => data);
  }
}
