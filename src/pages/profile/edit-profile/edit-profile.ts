import { Button } from "../../../components/button/button";
import { Avatar } from "../../../components/images/avatar/avatar";
import { Input } from "../../../components/input/input";
import { EditProfileList } from "../../../components/lists/edit-profile-list/edit-profile-list";
import { Component } from "../../../core/component/component";
import { template } from "./edit-profile.tmpl";

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
    placeholder: "Почта",
    class: "input--border-none",
  }),
  loginInput: new Input({
    type: "text",
    placeholder: "Логин",
    class: "input--border-none",
  }),
  nameInput: new Input({ type: "text", placeholder: "Имя", class: "input--border-none" }),
  surnameInput: new Input({
    type: "text",
    placeholder: "Фамилия",
    class: "input--border-none",
  }),
  phoneInput: new Input({
    type: "tel",
    placeholder: "Телефон",
    class: "input--border-none",
  }),
  passwordInput: new Input({
    type: "password",
    placeholder: "Пароль",
    class: "input--border-none",
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
};

export class EditProfile extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}

export const editProfilePage = new EditProfile(EditProfileOptions);

// TODO: Refactor it by using field component or use label with input
