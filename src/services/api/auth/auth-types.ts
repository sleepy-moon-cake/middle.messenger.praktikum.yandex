export type AuthUser = User | AuthFail;

export type AuthFail = {
  reason: string;
};

export type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export function authUserTypeGuard(response: any): response is User {
  if (response && response.id) {
    return true;
  }
  return false;
}
