import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../store/utils";
import templatePug from "./message.pug";
import "./message.scss";
import { MessageProps } from "./types";

export class Message extends Block<MessageProps> {
  constructor(propsObj: MessageProps, eventName: string, events?: Events) {
    super("div", "message-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "message",
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
