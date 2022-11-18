import { Props } from "../../core/types";
import { FieldName } from "../../services/form-services/constants";

export interface InputBase extends Props {
  id: string;
  name: FieldName | string;
  value?: string;
  label?: string;
  labelClass?: string;
  placeholder?: string;
  inputClass?: string;
  required?: boolean;
}

export type TextInputProps = InputBase;

export type PhoneInputProps = InputBase;

export type EmailInputProps = InputBase;

export type SearchInputProps = InputBase & {
  inputContainerClass?: string;
  autofocusOn?: boolean;
  autocomplete?: boolean;
};

export type PasswordInputProps = InputBase & {
  inputContainerClass?: string;
};

export type InputProps =
  | TextInputProps
  | PhoneInputProps
  | EmailInputProps
  | SearchInputProps
  | PasswordInputProps;
