import { Dispatch } from "../../../core/store/store";
import { AppState } from "../types";
import { userService } from "./user";

export const editProfileAction = async function (
  dispatch: Dispatch<Partial<AppState>>,
  payload: any
) {
  userService
    .changeProfile(payload)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.response?.reason);
      }

      dispatch({ user: response.response });
      window.router.go("/chats");
    })
    .catch((e) => {
      console.warn("Check changePassword action and handle it", e);
    });
};

export const editPasswordAction = async function (
  dispatch: Dispatch<Partial<AppState>>,
  payload: any
) {
  userService
    .changePassword(payload)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.response?.reason);
      }
      window.router.go("/chats");
    })
    .catch((e) => {
      console.warn("Check changePassword action and handle it", e);
    });
};
