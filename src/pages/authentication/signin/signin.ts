import { Button } from "../../../components/button/button";
import { ErrorMessage } from "../../../components/error-message/error-message";
import { Form } from "../../../components/forms/form";
import { Input } from "../../../components/input/input";
import { Link } from "../../../components/link/link";
import { Patterns } from "../../../models/enums/patterns";
import { errorMessageHandler } from "../../../utils/errorMessagehandler.util";
import { Authentication } from "../authentication";

const mailErrorMessage = new ErrorMessage({ message: "Не корректный  mail" });
const loginErrorMessage = new ErrorMessage({ message: "Не корректный  логин" });
const surnameErrorMessage = new ErrorMessage({ message: "Не корректная  фамилия" });
const nameErrorMessage = new ErrorMessage({ message: "Не корректное  имя" });
const phoneErrorMessage = new ErrorMessage({ message: "Не корректное  телефон" });
const passwordErrorMessage = new ErrorMessage({ message: "Не корректное  пароль" });
const confirmPasswordErrorMessage = new ErrorMessage({
  message: "Не корректное  пароль",
});

const registerationForm = new Form({
  description: "Регистрация",
  items: [
    new Input({
      type: "email",
      class: "form__input",
      placeholder: "Почта",
      label: "Почта",
      pattern: Patterns.MAIL,
      errorMessage: mailErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(mailErrorMessage),
        },
      ],
    }),
    new Input({
      type: "text",
      class: "form__input",
      placeholder: "Логин",
      label: "Логин",
      pattern: Patterns.LOGIN,
      errorMessage: loginErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(loginErrorMessage),
        },
      ],
    }),
    new Input({
      type: "text",
      class: "form__input",
      placeholder: "Фамилия",
      label: "Фамилия",
      pattern: Patterns.NAME,
      errorMessage: surnameErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(surnameErrorMessage),
        },
      ],
    }),
    new Input({
      type: "text",
      class: "form__input",
      placeholder: "Имя",
      label: "Имя",
      pattern: Patterns.NAME,
      errorMessage: nameErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(nameErrorMessage),
        },
      ],
    }),
    new Input({
      type: "tel",
      class: "form__input",
      placeholder: "Телефон",
      label: "Телефон",
      pattern: Patterns.PHONE,
      errorMessage: phoneErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(phoneErrorMessage),
        },
      ],
    }),
    new Input({
      type: "password",
      class: "form__input",
      placeholder: "Пароль",
      label: "Пароль",
      pattern: Patterns.PASSWORD,
      errorMessage: passwordErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(passwordErrorMessage),
        },
      ],
    }),
    new Input({
      type: "password",
      class: "form__input",
      placeholder: "Пароль(еще раз)",
      label: "Пароль(еще раз)",
      pattern: Patterns.PASSWORD,
      errorMessage: confirmPasswordErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(confirmPasswordErrorMessage),
        },
      ],
    }),
  ],
  button: new Button({ content: "Авторизоваться" }),
  link: new Link({ content: "Войти?" }),
});

export const signinPage = new Authentication({ form: registerationForm });
