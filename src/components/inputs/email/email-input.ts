import { Block } from "../../../core/block";
import { Events, Props } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { FieldName } from "../../../services/form-services/form-validation-service";
import { mapStateToPropsCallBack } from "../../../store/utils";
import templatePug from "./email-input.pug";
import "./email-input.scss";

export interface EmailInputProps extends Props {
  id: string;
  name: FieldName;
  value?: string;
  label?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
  required?: boolean;
}

export class EmailInput extends Block<EmailInputProps> {
  constructor(propsObj: EmailInputProps, eventName: string, events?: Events) {
    super("div", "email-input-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
