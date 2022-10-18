import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../store/utils";
import { MessagesListProps } from "../message/types";
import templatePug from "./messages-list.pug";
import "./messages-list.scss";

export class MessagesList extends Block<MessagesListProps> {
  constructor(propsObj: MessagesListProps, eventName: string, events?: Events) {
    super("div", "messages-list", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "messagesList",
      this._meta.events
    );
  }

  componentDidMount() {
    setTimeout(scrollBottom, 0);
  }
}

function scrollBottom(): void {
  const chatsContainerElement = document.querySelector(".chat") as HTMLElement;

  if (!chatsContainerElement) {
    return;
  }

  chatsContainerElement.scrollTop = chatsContainerElement.scrollHeight;
}
