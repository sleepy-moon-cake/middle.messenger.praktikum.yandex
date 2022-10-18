import { GetUsersAPI, UsersResponse } from "../../api/chat/get-user-api";
import { ErrorResponse } from "../../api/types";
import { UserActionIcon } from "../../components/found-user/types";
import { UsersListProps } from "../../components/found-users/users-list";
import { getEventName } from "../../core/utils/get-event-name";
import { getPathFromArray } from "../../core/utils/get-path-from-array";
import { Options, ResponseType } from "../../services/http-service";
import store from "../../store/store";
import { getAvatarLink, isArray } from "../../utils";

type UserLoginFormModel = {
  login: string;
};

const getUsersAPI = new GetUsersAPI();

export class GetUsersController {
  static async get(data: UserLoginFormModel): Promise<void> {
    try {
      getUsersAPI
        .get(prepareDataToRequest(data))
        .then((response: UsersResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          store.set(
            getPathFromArray(["popupAddUserToChat", "usersList"]),
            prepareDataToStore(response),
            getEventName("popupAddUserToChat", "usersList")
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

function prepareDataToRequest(data: UserLoginFormModel): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };
}

function prepareDataToStore(foundUsers: UsersResponse): UsersListProps {
  const state = store.getState();

  const users = foundUsers.map((user) => {
    return {
      id: user.id,
      fullName: `${user.first_name} ${user.second_name}`,
      avatar: {
        avatarImgSrc: getAvatarLink(user.avatar),
        size: "30px",
      },
      iconType: UserActionIcon.Add,
    };
  });

  return {
    ...state.chatPage.popupAddUserToChat.usersList,
    users: users,
  };
}
