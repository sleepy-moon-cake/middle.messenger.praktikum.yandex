import { Block } from "../../../core/block";
import { Events, Props } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { FormButtonProps } from "../../form-button/form-button";
import { TextInputProps } from "../../inputs/text/text-input";
import templatePug from "./popup-create-chat.pug";
import "./popup-create-chat.scss";

export interface PopupCreateChatProps extends Props {
  isOpened: boolean;
  defaultChatAvatarSrc: string;
  chatAvatarSrc: string | null;
  nameChatInput: TextInputProps;
  createChatButton: FormButtonProps;
}

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
