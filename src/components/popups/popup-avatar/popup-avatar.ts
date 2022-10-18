import { Block } from "../../../core/block";
import { Events, Props } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { FormButtonProps } from "../../form-button/form-button";
import templatePug from "./popup-avatar.pug";
import "./popup-avatar.scss";

export interface PopupAvatarProps extends Props {
  isOpened: boolean;
  defaultImgSrc: string;
  avatarImgSrc: string | null;
  avatarBlobImgSrc: string | null;
  changeAvatarButton: FormButtonProps;
}

export class PopupAvatar extends Block<PopupAvatarProps> {
  constructor(propsObj: PopupAvatarProps, eventName: string, events?: Events) {
    super("div", "popup-avatar", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "popupAvatar",
      this._meta.events
    );
  }
}
