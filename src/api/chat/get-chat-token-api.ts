import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

export type ChatTokenResponse = {
  token: string;
};

const getChatTokenAPIInstance = new Http(`${HOST}/api/v2/chats/token/`);

export class GetChatTokenAPI extends BaseAPI {
  public get(
    options: Options,
    chatId: number
  ): Promise<ChatTokenResponse | ErrorResponse> {
    return getChatTokenAPIInstance
      .post<ChatTokenResponse | ErrorResponse>(`${chatId}`, options)
      .then((data) => data);
  }
}
