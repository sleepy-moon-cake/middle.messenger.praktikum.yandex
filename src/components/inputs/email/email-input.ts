import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { EmailInputProps } from "../types-input";
import templatePug from "./email-input.pug";
import "./email-input.scss";

export class EmailInput extends Block<EmailInputProps> {
  constructor(propsObj: EmailInputProps, eventName: string, events?: Events) {
    super("div", "email-input-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
