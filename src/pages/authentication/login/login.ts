import { Button } from "../../../components/button/button";
import { ErrorMessage } from "../../../components/error-message/error-message";
import { Form } from "../../../components/forms/form";
import { Input } from "../../../components/input/input";
import { Link } from "../../../components/link/link";
import { EventBus } from "../../../core/event-bus/event-bus";
import { Patterns } from "../../../models/enums/patterns";
import { errorMessageHandler } from "../../../utils/errorMessagehandler.util";
import { Authentication } from "../authentication";

const loginErrorMessage = new ErrorMessage({ message: "Введите корретный логин" });
const passwordErrorMessage = new ErrorMessage({ message: "Введите корретный пароль" });

const authorizationForm = new Form({
  description: "Вход",
  items: [
    new Input({
      type: "text",
      class: "form__input",
      placeholder: "Логин",
      label: "Логин",
      name: "login",
      pattern: Patterns.LOGIN,
      errorMessage: loginErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(loginErrorMessage),
        },
      ],
    }),
    new Input({
      type: "password",
      class: "form__input",
      placeholder: "Пароль",
      label: "Пароль",
      name: "password",
      pattern: Patterns.PASSWORD,
      errorMessage: passwordErrorMessage,
      listeners: [
        {
          blur: errorMessageHandler(passwordErrorMessage),
        },
      ],
    }),
  ],
  button: new Button({ content: "Авторизоваться" }),
  link: new Link({ content: "Нет аккаунта?" }),
  listeners: [
    {
      submit: function (e: Event) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const inputs = Array.from(form.querySelectorAll("input"));
        const result = inputs.reduce((registry: Record<string, string>, input) => {
          registry[input.name] = input.value;
          return registry;
        }, {});

        console.log(result);
      },
    },
  ],
});

export const loginPage = new Authentication({ form: authorizationForm });
