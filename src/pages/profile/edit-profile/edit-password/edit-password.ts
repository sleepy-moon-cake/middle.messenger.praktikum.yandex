import { Button } from "../../../../components/button/button";
import { ErrorMessage } from "../../../../components/error-message/error-message";
import { Avatar } from "../../../../components/images/avatar/avatar";
import { Input } from "../../../../components/input/input";
import { EditPasswordList } from "../../../../components/lists/edit-password-list/edit-profile-list";
import { Patterns } from "../../../../models/enums/patterns";
import { errorMessageHandler } from "../../../../utils/errorMessagehandler.util";
import { EditProfile } from "../edit-profile";

const passwordErrorMessage = new ErrorMessage({ message: "Не корректное  пароль" });

const EditPasswordListOptions = {
  class: "profile__list",
  oldPasswordName: "Старый пароль",
  newPasswordName: "Новый пароль",
  repeatPasswordName: "Повторите новый пароль",
  oldPasswordInput: new Input({
    type: "password",
    placeholder: "Старый пароль",
    class: "input--border-none",
    name: "password",
    pattern: Patterns.PASSWORD,
    errorMessage: passwordErrorMessage,
    listeners: [
      {
        blur: errorMessageHandler(passwordErrorMessage),
      },
    ],
  }),
  newPasswordInput: new Input({
    type: "password",
    placeholder: "Новый пароль",
    class: "input--border-none",
    name: "new-password",
    pattern: Patterns.PASSWORD,
    errorMessage: passwordErrorMessage,
    listeners: [
      {
        blur: errorMessageHandler(passwordErrorMessage),
      },
    ],
  }),
  repeatPasswordInput: new Input({
    type: "password",
    placeholder: "Повторите новый пароль",
    class: "input--border-none",
    name: "confirm-password",
    pattern: Patterns.PASSWORD,
    errorMessage: passwordErrorMessage,
    listeners: [
      {
        blur: errorMessageHandler(passwordErrorMessage),
      },
    ],
  }),
};

const editPasswordOptions = {
  avatar: new Avatar({ src: "static/image/avatar.png" }),
  editList: new EditPasswordList(EditPasswordListOptions),
  button: new Button({
    type: "submit",
    content: "Сохранить",
    class: "profile__save-button",
  }),
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
};

export const editPasswordPage = new EditProfile(editPasswordOptions);

// TODO: Refactor it by using form component
