import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { PhoneInputProps } from "../types-input";
import templatePug from "./phone-input.pug";
import "./phone-input.scss";

export class PhoneInput extends Block<PhoneInputProps> {
  constructor(propsObj: PhoneInputProps, eventName: string, events?: Events) {
    super("div", "phone-input-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
