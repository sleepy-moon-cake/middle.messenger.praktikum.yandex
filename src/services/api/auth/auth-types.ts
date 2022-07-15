export type AuthUser = AuthUserSucces | AuthFail;

export type AuthFail = {
  reason: string;
};

export type AuthUserSucces = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export function authUserTypeGuard(response: any): response is AuthUserSucces {
  debugger;
  if (response && response.id) {
    return true;
  }
  return false;
}
