import {
  GetUsersByChatIdAPI,
  UsersResponse,
} from "../../api/chat/get-users-by-chat-id-api";
import { ErrorResponse } from "../../api/types";
import { UserActionIcon } from "../../components/found-user/types";
import { UsersListProps } from "../../components/found-users/users-list";
import { Indexed } from "../../core/types";
import { getEventName } from "../../core/utils/get-event-name";
import { getPathFromArray } from "../../core/utils/get-path-from-array";
import { Options, ResponseType } from "../../services/http-service";
import store from "../../store/store";
import { getAvatarLink, isArray } from "../../utils";

const getUsersByChatIdAPI = new GetUsersByChatIdAPI();

export class GetUsersByChatIdController {
  static async get(selectedChatId: number): Promise<void> {
    try {
      // Запускаем крутилку
      return getUsersByChatIdAPI
        .get(getOptions(), selectedChatId)
        .then((response: UsersResponse | ErrorResponse) => {
          // Останавливаем крутилку
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          store.set(
            getPathFromArray(["popupDeleteUserFromChat", "usersList"]),
            prepareDataToStore(response),
            getEventName("popupDeleteUserFromChat", "usersList")
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

function prepareDataToStore(usersInChat: UsersResponse): UsersListProps {
  const state = store.getState();

  const users = usersInChat.map((user) => {
    return {
      id: user.id,
      fullName: `${user.first_name} ${user.second_name}`,
      avatar: {
        avatarImgSrc: getAvatarLink(user.avatar),
        size: "30px",
      },
      iconType: UserActionIcon.Delete,
    };
  });

  return {
    ...state.chatPage.popupDeleteUserFromChat.usersList,
    users: users,
  };
}
