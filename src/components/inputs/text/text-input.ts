import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { TextInputProps } from "../types-input";
import templatePug from "./text-input.pug";
import "./text-input.scss";

export class TextInput extends Block<TextInputProps> {
  constructor(propsObj: TextInputProps, eventName: string, events?: Events) {
    super("div", "text-input-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
