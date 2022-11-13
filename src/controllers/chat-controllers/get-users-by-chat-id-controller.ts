import {
  GetUsersByChatIdAPI,
  UsersResponse,
} from "../../api/chat/get-users-by-chat-id-api";
import { ErrorResponse } from "../../api/types";
import { UsersListProps } from "../../components";
import { UserActionIcon } from "../../components/found-user/types";
import { getEventName } from "../../core/utils/get-event-name";
import { getPathFromArray } from "../../core/utils/get-path-from-array";
import { Options, ResponseType } from "../../services/http-service";
import store from "../../store/store";
import { getAvatarLink, isArray } from "../../utils";

const getUsersByChatIdAPI = new GetUsersByChatIdAPI();

export class GetUsersByChatIdController {
  static async get(selectedChatId: number): Promise<void> {
    try {
      return getUsersByChatIdAPI
        .get(getOptions(), selectedChatId)
        .then((response: UsersResponse | ErrorResponse) => {
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
        });
    } catch (error) {
      console.error(error);
    }
  }
}

function isErrorResponse(response: any): response is ErrorResponse {
  return isNotArray(response) && !!response.reason;
}

function isNotArray(response: any) {
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
