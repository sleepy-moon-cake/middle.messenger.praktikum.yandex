import { Button, ErrorMessage, Form, Input, Link } from "../../../components";
import { router } from "../../../core/router/router";
import { Patterns } from "../../../models/enums/patterns";
import { signin } from "../../../services/api/auth/auth-actions";
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
  link: new Link({ content: "Нет аккаунта?2e", href: "/signup" }),
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

        window.appStore.dispatch(signin, result);

        console.log(result);
      },
    },
  ],
});

export const signinPage = new Authentication({
  form: authorizationForm,
  backButton: new Button({
    content: "Back",
    listeners: [
      {
        click: function () {
          router.back();
        },
      },
    ],
  }),
  forwardButton: new Button({
    content: "Forward",
    listeners: [
      {
        click: function () {
          router.forward();
        },
      },
    ],
  }),
});
