import { Chat } from "../../components/chat/chat";
import { Component } from "../../core/component/component";
import { template } from "./chats.tmpl";

class Chats extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}

const chatList = {
  chat1: new Chat({}),
  chat2: new Chat({}),
  chat3: new Chat({}),
  chat4: new Chat({}),
  chat5: new Chat({}),
  chat6: new Chat({}),
  chat7: new Chat({}),
  chat8: new Chat({}),
};

export const chartsPage = new Chats(chatList);
