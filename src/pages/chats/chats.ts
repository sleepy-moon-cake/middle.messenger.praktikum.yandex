import { Button, Chat, Input } from "../../components";
import { Component } from "../../core/component/component";
import { redirectTo } from "../../utils/redirect.util";
import { template } from "./chats.tmpl";

class Chats extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}

const chatList = {
  items: [
    new Chat({
      class: "chatter__element",
      id: 1,
      listeners: [
        {
          click: function () {
            redirectTo("1");
          },
        },
      ],
    }),
    new Chat({
      class: "chatter__element",
      id: 2,
      listeners: [
        {
          click: function () {
            redirectTo("2");
          },
        },
      ],
    }),
    new Chat({
      class: "chatter__element",
      id: 3,
      listeners: [
        {
          click: function () {
            redirectTo("3");
          },
        },
      ],
    }),
    new Chat({
      id: 4,
      class: "chatter__element",
      listeners: [
        {
          click: function () {
            redirectTo("4");
          },
        },
      ],
    }),
  ],
  typing: new Input(
    {
      placeholder: "Введите сообщение",
      required: true,
    },
    "width-100"
  ),
  sendMessage: new Button({ content: "&#10148", class: "chatter__send-button" }),
};

export const chartsPage = new Chats(chatList);
