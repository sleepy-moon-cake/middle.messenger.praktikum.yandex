import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../store/utils";
import templatePug from "./button.pug";
import "./button.scss";
import { ButtonProps } from "./types";

export class FormButton extends Block<ButtonProps> {
  constructor(props: ButtonProps, eventName: string, events?: Events) {
    super("div", "button-container", props, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
