import { Block } from "../../core/block";
import { Events, Props } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../store/utils";
import { ChatCardProps } from "../chat-card/chat-card";
import templatePug from "./chats-list.pug";

export interface ChatsListProps extends Props {
  chats: ChatCardProps[] | [];
}

export class ChatsList extends Block<ChatsListProps> {
  constructor(propsObj: ChatsListProps, eventName: string, events?: Events) {
    super("div", "chats-list", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "chatsList",
      this._meta.events
    );
  }
}
