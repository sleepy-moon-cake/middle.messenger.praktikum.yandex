import { CreateChatAPI, CreateChatResponse } from "../../api/chat/create-chat-api";
import { ErrorResponse } from "../../api/types";
import { Options, ResponseType } from "../../services/http-service";
import { isArray } from "../../utils";
import { GetChatsController } from "./get-chats-controller";

type CreateChatFormModel = {
  title: string;
};

const createChatAPI = new CreateChatAPI();

export class CreateChatController {
  static async create(data: CreateChatFormModel): Promise<void> {
    try {
      createChatAPI
        .create(prepareDataToRequest(data))
        .then((response: CreateChatResponse | ErrorResponse | null) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          GetChatsController.get();
        })
        .catch((error) => {
          console.error(error, data);
        });
    } catch (error) {
      console.error(error, data);
    }
  }
}

function isErrorResponse(response: any): response is ErrorResponse {
  return response !== null && isNotArray(response) && !!response.reason;
}

function isNotArray(response: any): any {
  return !isArray(response);
}

function prepareDataToRequest(data: CreateChatFormModel): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };
}
