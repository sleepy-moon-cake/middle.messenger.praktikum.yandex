import { Button } from "../../../../components/button/button";
import { Avatar } from "../../../../components/images/avatar/avatar";
import { Input } from "../../../../components/input/input";
import { EditPasswordList } from "../../../../components/lists/edit-password-list/edit-profile-list";
import { EditProfile } from "../edit-profile";

const EditPasswordListOptions = {
  class: "profile__list",
  oldPasswordName: "Старый пароль",
  newPasswordName: "Новый пароль",
  repeatPasswordName: "Повторите новый пароль",
  oldPasswordInput: new Input({
    type: "password",
    placeholder: "Старый пароль",
    class: "input--border-none",
  }),
  newPasswordInput: new Input({
    type: "password",
    placeholder: "Новый пароль",
    class: "input--border-none",
  }),
  repeatPasswordInput: new Input({
    type: "password",
    placeholder: "Повторите новый пароль",
    class: "input--border-none",
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
};

export const editPasswordPage = new EditProfile(editPasswordOptions);
