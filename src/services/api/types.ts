import { ComponentClass } from "../../core/component/component";

export type SignupPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignupResponse = {
  id: number;
};

export type SigninPayload = {
  login: string;
  password: string;
};

export type AppState = {
  page: ComponentClass;
  user: any;
};
