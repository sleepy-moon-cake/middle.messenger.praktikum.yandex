import { ChatTokenResponse, GetChatTokenAPI } from "../../api/chat/get-chat-token-api";
import { ErrorResponse } from "../../api/types";
import { Options, ResponseTypes } from "../../services/http-service";

const getChatTokenAPI = new GetChatTokenAPI();

export class GetChatTokenController {
  static async get(chatId: number): Promise<string | void> {
    try {
      return getChatTokenAPI
        .get(getOptions(), chatId)
        .then((response: ChatTokenResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          return response?.token;
        })
        .catch((error) => {
          console.error(error, chatId);
        });
    } catch (error) {
      console.error(error, chatId);
    }
  }
}

function isErrorResponse(response: Record<any, any>): response is ErrorResponse {
  return !!response?.reason;
}

function getOptions(): Options {
  return {
    withCredentials: true,
    responseType: ResponseTypes.json,
  };
}
