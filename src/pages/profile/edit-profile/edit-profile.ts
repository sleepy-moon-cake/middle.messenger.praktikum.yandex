import { Button } from "../../../components/button/button";
import { ErrorMessage } from "../../../components/error-message/error-message";
import { Avatar } from "../../../components/images/avatar/avatar";
import { Input } from "../../../components/input/input";
import { EditProfileList } from "../../../components/lists/edit-profile-list/edit-profile-list";
import { Component } from "../../../core/component/component";
import { Patterns } from "../../../models/enums/patterns";
import { errorMessageHandler } from "../../../utils/errorMessagehandler.util";
import { template } from "./edit-profile.tmpl";

const mailErrorMessage = new ErrorMessage({ message: "Не корректный  mail" });
const loginErrorMessage = new ErrorMessage({ message: "Не корректный  логин" });
const surnameErrorMessage = new ErrorMessage({ message: "Не корректная  фамилия" });
const nameErrorMessage = new ErrorMessage({ message: "Не корректное  имя" });
const phoneErrorMessage = new ErrorMessage({ message: "Не корректное  телефон" });
const passwordErrorMessage = new ErrorMessage({ message: "Не корректное  пароль" });

const editListOptions = {
  class: "profile__list",
  mail: "Почта",
  login: "Логин",
  name: "Имя",
  surname: "Фамилия",
  phone: "Телефон",
  password: "Пароль",
  mailInput: new Input({
    type: "email",
    class: "form__input",
    placeholder: "Почта",
    label: "Почта",
    name: "email",
    pattern: Patterns.MAIL,
    errorMessage: mailErrorMessage,
    listeners: [
      {
        blur: errorMessageHandler(mailErrorMessage),
      },
    ],
  }),
  loginInput: new Input({
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
  nameInput: new Input({
    type: "text",
    class: "form__input",
    placeholder: "Имя",
    label: "Имя",
    name: "name",
    pattern: Patterns.NAME,
    errorMessage: nameErrorMessage,
    listeners: [
      {
        blur: errorMessageHandler(nameErrorMessage),
      },
    ],
  }),
  surnameInput: new Input({
    type: "text",
    class: "form__input",
    placeholder: "Фамилия",
    label: "Фамилия",
    name: "surname",
    pattern: Patterns.NAME,
    errorMessage: surnameErrorMessage,
    listeners: [
      {
        blur: errorMessageHandler(surnameErrorMessage),
      },
    ],
  }),
  phoneInput: new Input({
    type: "tel",
    class: "form__input",
    placeholder: "Телефон",
    name: "phone",
    label: "Телефон",
    pattern: Patterns.PHONE,
    errorMessage: phoneErrorMessage,
    listeners: [
      {
        blur: errorMessageHandler(phoneErrorMessage),
      },
    ],
  }),
  passwordInput: new Input({
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
};

const EditProfileOptions = {
  avatar: new Avatar({ src: "static/image/avatar.png" }),
  editList: new EditProfileList(editListOptions),
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

export class EditProfile extends Component {
  public render() {
    return this.compile(template, this._props);
  }

  public getEventTargetElement(): HTMLElement {
    return this.getElement().querySelector("form")!;
  }
}

export const editProfilePage = new EditProfile(EditProfileOptions);

// TODO: Refactor it by using form component
