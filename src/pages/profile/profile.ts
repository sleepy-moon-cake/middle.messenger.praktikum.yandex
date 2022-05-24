import { Avatar } from "../../components/images/avatar/avatar";
import { Link } from "../../components/link/link";
import { InteractiveList } from "../../components/lists/interactive-list/interactive-list";
import { List } from "../../components/lists/list/list";
import { Component } from "../../core/component/component";
import { template } from "./profile.tmpl";

const listOptions = {
  class: "profile__list",
  items: [
    {
      key: "Почта",
      value: "@pochta.ru",
    },
    {
      key: "Логин",
      value: "ivanivanov",
    },
    {
      key: "Имя",
      value: "Иван",
    },
    {
      key: "Фамилия",
      value: "Иванов",
    },
    {
      key: "Имя в чате",
      value: "Иван",
    },
    {
      key: "Телефон",
      value: "+7 (909) 967 30 30",
    },
  ],
};
const interactiveListOptions = {
  editData: new Link({ content: "Изменить данные" }),
  editPassword: new Link({ content: "Изменить пароль" }),
  exit: new Link({ content: "Выйти", class: "link--exit" }),
};

const profileOptions = {
  avatar: new Avatar({ src: "static/image/avatar.png" }),
  name: "Ivan",
  list: new List(listOptions),
  interactiveList: new InteractiveList(interactiveListOptions),
};

class Profile extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}

export const profilePage = new Profile(profileOptions);
