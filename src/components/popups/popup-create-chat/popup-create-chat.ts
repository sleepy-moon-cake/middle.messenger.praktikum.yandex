import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { PopupCreateChatProps } from "../types";
import templatePug from "./popup-create-chat.pug";
import "./popup-create-chat.scss";

export class PopupCreateChat extends Block<PopupCreateChatProps> {
  constructor(propsObj: PopupCreateChatProps, eventName: string, events?: Events) {
    super("div", "popup-create-chat", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "popupCreateChat",
      this._meta.events
    );
  }
}
