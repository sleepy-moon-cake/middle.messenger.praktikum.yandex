import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { PasswordInputProps } from "../types-input";
import templatePug from "./password-input.pug";
import "./password-input.scss";

export class PasswordInput extends Block<PasswordInputProps> {
  constructor(propsObj: PasswordInputProps, eventName: string, events?: Events) {
    super("div", "password-input-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
