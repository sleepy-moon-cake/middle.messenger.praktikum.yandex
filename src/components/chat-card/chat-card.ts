import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../store/utils";
import templatePug from "./chat-card.pug";
import "./chat-card.scss";
import { ChatCardProps } from "./types";

export class ChatCard extends Block<ChatCardProps> {
  readonly eventName: string;

  constructor(propsObj: ChatCardProps, eventName: string, events?: Events) {
    super("div", "chat-card-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);

    this.eventName = eventName;
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      this.eventName,
      this._meta.events
    );
  }
}
