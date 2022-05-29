import { Chat } from "../../components/chat/chat";
import { Component } from "../../core/component/component";
import { template } from "./chats.tmpl";

class Chats extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}

const chatList = {
  items: [
    new Chat({ class: "chatter__element" }),
    new Chat({ class: "chatter__element" }),
    new Chat({ class: "chatter__element" }),
    new Chat({ class: "chatter__element" }),
  ],
};

export const chartsPage = new Chats(chatList);
