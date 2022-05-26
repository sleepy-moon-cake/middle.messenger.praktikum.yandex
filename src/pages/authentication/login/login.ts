import { Button } from "../../../components/button/button";
import { ErrorMessage } from "../../../components/error-message/error-message";
import { LoginForm } from "../../../components/forms/login-form/login-from";
import { Input } from "../../../components/input/input";
import { Link } from "../../../components/link/link";
import { Patterns } from "../../../models/enums/patterns";
import { errorMessageHandler } from "../../../utils/errorMessagehandler";
import { Authentication } from "../authentication";

const loginErrorMessage = new ErrorMessage({ message: "Введите коретный логин" });
const passwordErrorMessage = new ErrorMessage({ message: "Введите коретный пароль" });

const authorizationForm = new LoginForm({
  description: "Вход",
  loginInput: new Input({
    type: "text",
    placeholder: "Логин",
    pattern: Patterns.LOGIN,
    errorMessage: loginErrorMessage,
    listeners: [
      {
        input: errorMessageHandler(loginErrorMessage),
      },
    ],
  }),
  passwordInput: new Input({
    type: "password",
    placeholder: "Пароль",
    pattern: Patterns.PASSWORD,
    errorMessage: passwordErrorMessage,
    listeners: [
      {
        input: errorMessageHandler(passwordErrorMessage),
      },
    ],
  }),
  button: new Button({ content: "Авторизоваться" }),
  link: new Link({ content: "Нет аккаунта?" }),
});

export const loginPage = new Authentication({ form: authorizationForm });
