import { Action, Dispatch } from "../../../core/store/store";
import { defaultState } from "../../../index";
import { AppState, SigninPayload, SignupPayload } from "../types";
import { authService } from "./auth";
import { AuthUser, AuthFail, authUserTypeGuard } from "./auth-types";

export const initUser: Action<AppState> = async function (
  dispatch: Dispatch<Partial<AppState>>
) {
  await authService
    .user()
    .then((response) => response.response)
    .then((response: AuthUser) => {
      if (authUserTypeGuard(response)) {
        dispatch({ user: response, isAuthenticated: true });
        window.router.go("/chats");
      }
      const fail = response as AuthFail;

      throw new Error(fail.reason);
    })
    .catch((e) => {
      console.warn("Check initApp action and handle it", e);
    })
    .finally(() => dispatch({ appIsInited: true }));
};

export const signupAction: Action<any> = async function ({}, payload: SignupPayload) {
  await authService
    .signup(payload)
    .then((response) => response.response)
    .then((response) => {
      if (!response.id) {
        throw new Error(response.reason);
      }
    })
    .catch((e) => {
      console.warn("Check signup action and handle it", e);
    });
};

export const signinAction: Action<AppState> = async function (
  dispatch: Dispatch<Partial<AppState>>,
  payload: SigninPayload
) {
  await authService
    .signin(payload)
    .then((response) => {
      return { status: response.status, response: response.response };
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.response?.reason);
      }

      if (!window.appStore.getState("user")) {
        window.appStore.dispatch(initUser);
      }
    })
    .catch((e) => {
      console.warn("Check signin action and handle it", e);
    });
};

export const signoutAction: Action<AppState> = async function (dispatch: Dispatch<any>) {
  await authService.logout().then(() => {
    dispatch(defaultState);
    window.router.go("/");
  });
};
