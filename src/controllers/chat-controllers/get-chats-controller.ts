// import { getPathFromArray } from "..../../pages/chat/eventsrom-array";
import { ChatsResponse, GetChatsAPI } from "../../api/chat/get-chats-api";
import { ErrorResponse } from "../../api/types";
import { ChatsListProps } from "../../components/chat-list/chats-list";
import { TimeProps, TimeType } from "../../components/time/types";
import { Indexed } from "../../core/types";
import { getEventName } from "../../core/utils/get-event-name";
import { getPathFromArray } from "../../core/utils/get-path-from-array";
import { CHAT_PAGE_EVENT_NAME } from "../../pages/chat/events";
import { Options, ResponseType } from "../../services/http-service";
import store from "../../store/store";
import { getAvatarLink, isArray } from "../../utils";

const getChatsAPI = new GetChatsAPI();

export class GetChatsController {
  static async get(): Promise<void> {
    try {
      // Запускаем крутилку
      getChatsAPI
        .get(getOptions())
        .then((response: ChatsResponse | ErrorResponse) => {
          // Останавливаем крутилку
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          store.set(
            getPathFromArray(["chatPage", "popupCreateChat"]),
            {
              ...store.getState().chatPage.popupCreateChat,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, "popupCreateChat")
          );

          store.set(
            getPathFromArray(["chatPage", "chatsList"]),
            prepareDataToStore(response),
            getEventName(CHAT_PAGE_EVENT_NAME, "chatsList")
          );
        })
        .catch((error) => {
          console.error(error);
          // Останавливаем крутилку
        });
    } catch (error) {
      console.error(error);
      // Логика обработки ошибок
    }
  }
}

function isErrorResponse(response: Indexed | Indexed[]): response is ErrorResponse {
  return isNotArray(response) && !!response.reason;
}

function isNotArray(response: Indexed | Indexed[]): response is Indexed {
  return !isArray(response);
}

function getOptions(): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
  };
}

function prepareDataToStore(chats: ChatsResponse): ChatsListProps {
  const state = store.getState();

  const chatCards = chats.map((chat) => {
    return {
      chatName: chat.title,
      textMessage: chat.last_message?.content,
      unreadMessageCount: chat.unread_count,
      avatar: {
        avatarImgSrc: getAvatarLink(chat.avatar),
        size: "40px",
      },
      time: getTime(chat.last_message?.time),
      active: false,
      id: chat.id,
    };
  });

  return {
    ...state.chatPage.chatsList,
    chats: chatCards,
  };
}

function getTime(date: string | undefined): TimeProps | null {
  if (!date) {
    return null;
  }

  return {
    type: TimeType.Card,
    date: new Date(date),
  };
}
