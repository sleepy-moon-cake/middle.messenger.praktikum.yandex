import { Action, Dispatch } from "../../../core/store/store";
import { AppState } from "../types";
import { chatsService } from "./chats";

export const getChatsAction: Action<AppState> = async function (
  dispatch: Dispatch<Partial<AppState>>
) {
  await chatsService
    .chats()
    .then((response) => {
      if (response.status === 200) {
        dispatch({ chats: response.response });
      }
      throw new Error("Something goes wrong");
    })
    .catch((e) => console.log(e.ErrorMessage));
};

export const createChatAction: Action<AppState> = async function (
  dispatch: Dispatch<Partial<AppState>>,
  payload: any
) {
  await chatsService
    .createChat(payload)
    .then((response) => {
      if (response.status === 200) {
        dispatch({ chat: response.response });
        window.appStore.dispatch(getChatsAction);
      }
      throw new Error("Something goes wrong");
    })
    .catch((e) => console.log(e.ErrorMessage));
};

export const deleteChatAction: Action<AppState> = async function (
  _dispatch: Dispatch<Partial<AppState>>,
  payload: any
) {
  await chatsService
    .deleteChat(payload)
    .then((response) => {
      if (response.status === 200) {
        window.appStore.dispatch(getChatsAction);
      }
      throw new Error("Something goes wrong");
    })
    .catch((e) => console.log(e.ErrorMessage));
};
