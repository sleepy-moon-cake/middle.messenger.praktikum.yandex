import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { PopupAddUserProps } from "../types";
import templatePug from "./popup-add-user.pug";
import "./popup-add-user.scss";

export class PopupAddUser extends Block<PopupAddUserProps> {
  constructor(propsObj: PopupAddUserProps, eventName: string, events?: Events) {
    super("div", "popup-add-user", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "popupAddUserToChat",
      this._meta.events
    );
  }
}
