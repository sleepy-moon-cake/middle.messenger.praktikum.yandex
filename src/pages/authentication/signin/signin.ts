import { Button } from "../../../components/button/button";
import { ErrorMessage } from "../../../components/error-message/error-message";
import { SigninForm } from "../../../components/forms/signin-form/signin-form";
import { Input } from "../../../components/input/input";
import { Link } from "../../../components/link/link";
import { Patterns } from "../../../models/enums/patterns";
import { errorMessageHandler } from "../../../utils/errorMessagehandler";
import { Authentication } from "../authentication";

const mailErrorMessage = new ErrorMessage({ message: "Не коректный  mail" });
const loginErrorMessage = new ErrorMessage({ message: "Не коректный  логин" });
const surnameErrorMessage = new ErrorMessage({ message: "Не коректная  фамилия" });
const nameErrorMessage = new ErrorMessage({ message: "Не коректное  имя" });
const phoneErrorMessage = new ErrorMessage({ message: "Не коректное  телефон" });
const passwordErrorMessage = new ErrorMessage({ message: "Не коректное  пароль" });
const confirmPasswordErrorMessage = new ErrorMessage({ message: "Не коректное  пароль" });

const registerationForm = new SigninForm({
  description: "Регистрация",
  mailInput: new Input({
    type: "email",
    placeholder: "Почта",
    pattern: Patterns.MAIL,
    errorMessage: mailErrorMessage,
    listeners: [
      {
        input: errorMessageHandler(mailErrorMessage),
      },
    ],
  }),
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
  surnameInput: new Input({
    type: "text",
    placeholder: "Фамилия",
    pattern: Patterns.NAME,
    errorMessage: surnameErrorMessage,
    listeners: [
      {
        input: errorMessageHandler(surnameErrorMessage),
      },
    ],
  }),
  nameInput: new Input({
    type: "text",
    placeholder: "Имя",
    pattern: Patterns.NAME,
    errorMessage: nameErrorMessage,
    listeners: [
      {
        input: errorMessageHandler(nameErrorMessage),
      },
    ],
  }),
  phoneInput: new Input({
    type: "tel",
    placeholder: "Телефон",
    pattern: Patterns.PHONE,
    errorMessage: phoneErrorMessage,
    listeners: [
      {
        input: errorMessageHandler(phoneErrorMessage),
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
  confirmPasswordInput: new Input({
    type: "password",
    placeholder: "Пароль(еще раз)",
    pattern: Patterns.PASSWORD,
    errorMessage: confirmPasswordErrorMessage,
    listeners: [
      {
        input: errorMessageHandler(confirmPasswordErrorMessage),
      },
    ],
  }),
  button: new Button({ content: "Авторизоваться" }),
  link: new Link({ content: "Войти?" }),
});

export const signinPage = new Authentication({ form: registerationForm });
