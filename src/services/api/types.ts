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
  user: any;
  appIsInited: boolean;
  isAuthenticated: boolean;
  chats: [];
  chat: any;
};
