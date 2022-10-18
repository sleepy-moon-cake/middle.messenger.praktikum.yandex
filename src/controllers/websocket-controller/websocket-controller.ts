import { CloseCode } from "../../api/websocket/types";
import { MessageResponse } from "../../api/websocket/types";
import { LastMessageResponse } from "../../api/websocket/types";
import { WebsocketApi } from "../../api/websocket/websocket-api";
import { WSS_HOST } from "../../constants";
import { isArray } from "../../utils";

type ReturnedThenFunction = {
  then: (callback: (isOpened: boolean) => void) => void;
};

class WebsocketController {
  private _socketApi!: WebsocketApi;
  private _url!: string;
  private _startCallBack!: (isOpened: boolean) => void;
  public isStarted = false;

  public start(userId: number, chatId: number, token: string): ReturnedThenFunction {
    this._url = `${WSS_HOST}/ws/chats/${userId}/${chatId}/${token}`;

    return this.startConnection();
  }

  private startConnection(): ReturnedThenFunction {
    this._socketApi = new WebsocketApi(this._url);

    this.close();
    this.error();

    return {
      then: (callback: (isOpened: boolean) => void) => {
        this._startCallBack = callback;

        this._socketApi.open((success: string) => {
          console.log("wss:// ", success);
          this.isStarted = true;
          callback(true);
          this._socketApi.ping();
        });
      },
    };
  }

  closeConnection(code: CloseCode = CloseCode.Success, reason?: string): void {
    this._socketApi.closeConnection(code, reason);
  }

  public close(): void {
    this._socketApi.close(
      (successMessage: string) => {
        this.isStarted = false;
        console.log("wss:// ", successMessage);
      },
      () => {
        this.isStarted = false;
        this.startConnection().then(this._startCallBack);
      }
    );
  }

  public error(): void {
    this._socketApi.error((event: Event) => {
      this.isStarted = false;
      console.error("wss:// ", event);
    });
  }

  public send(message: string): void {
    return this._socketApi.send(message);
  }

  public subscribeToMessage(callback: (response: MessageResponse) => void): void {
    this._socketApi.message((response) => {
      if (isMessageResponse(response)) {
        callback(response);
      }
    });
  }

  public getLastMessages(
    callback: (response: LastMessageResponse[]) => void,
    count: number = 0
  ): void {
    this._socketApi.message((response) => {
      if (isLastMessagesResponse(response)) {
        callback(response);
      }
    });

    this._socketApi.send(count.toString(), "get old");
  }
}

function isMessageResponse(response: any): response is MessageResponse {
  return isNotArray(response) && response.type === "message";
}

function isLastMessagesResponse(response: any): response is LastMessageResponse[] {
  return isArray(response);
}

function isNotArray(response: any) {
  return !isArray(response);
}

export const webSocketController = new WebsocketController();
