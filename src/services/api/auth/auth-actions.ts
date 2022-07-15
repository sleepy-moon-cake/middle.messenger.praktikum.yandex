import { Action, Dispatch } from "../../../core/store/store";
import { AppState, SigninPayload, SignupPayload } from "../types";
import { auth } from "./auth";
import { AuthUser, AuthFail, authUserTypeGuard } from "./auth-types";

export const initUser: Action<AppState> = async function (dispatch: Dispatch<AppState>) {
  await auth
    .user()
    .then((response) => response.response)
    .then((response: AuthUser) => {
      debugger;
      if (authUserTypeGuard(response)) {
        dispatch({ user: response });
      }
      const fail = response as AuthFail;

      throw new Error(fail.reason);
    })
    .catch((e) => {
      console.warn("Check initApp action and handle it", e);
    });
};

export const signup: Action<any> = async function (
  dispatch: Dispatch<any>,
  {},
  payload: SignupPayload
) {
  await auth
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

export const signin: Action<any> = async function (
  dispatch: Dispatch<any>,
  {},
  payload: SigninPayload
) {
  await auth
    .signin(payload)
    .then((response) => {
      return { status: response.status, response: response.response };
    })
    .then((response) => {
      debugger;
      if (response.status !== 200) {
        throw new Error(response.response?.reason);
      }
      dispatch(initUser);
    })
    .catch((e) => {
      console.warn("Check signin action and handle it", e);
    });
};

export const logout: Action<any> = async function (
  dispatch: Dispatch<any>,
  {},
  payload: SigninPayload
) {
  await auth.logout().then();
};
