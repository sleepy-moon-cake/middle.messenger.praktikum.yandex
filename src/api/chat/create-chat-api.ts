import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

export type CreateChatResponse = {
  id: number;
};

const createChatAPIInstance = new Http(`${HOST}/api/v2/chats`);

export class CreateChatAPI extends BaseAPI {
  public create(options: Options): Promise<CreateChatResponse | ErrorResponse | null> {
    return createChatAPIInstance
      .post<CreateChatResponse | ErrorResponse | null>("", options)
      .then((data) => data);
  }
}
