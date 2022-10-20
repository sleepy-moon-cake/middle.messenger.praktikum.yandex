import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

const addUsersToChatAPIInstance = new Http(`${HOST}/api/v2/chats/users`);

export class AddUsersToChatAPI extends BaseAPI {
  public add(options: Options): Promise<ErrorResponse | null> {
    return addUsersToChatAPIInstance
      .put<ErrorResponse | null>("", options)
      .then((data) => data);
  }
}
