import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { PopupAvatarProps } from "../types";
import templatePug from "./popup-avatar.pug";
import "./popup-avatar.scss";

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
