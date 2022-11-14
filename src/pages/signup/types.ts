import {
  TextInputProps,
  PhoneInputProps,
  PasswordInputProps,
  EmailInputProps,
  ButtonProps,
  ErrorMessageProps,
} from "../../components";
import { Props } from "../../core/types";

export interface SignUpPageProps extends Props {
  nameInput?: TextInputProps;
  errorName?: ErrorMessageProps;
  surnameInput?: TextInputProps;
  errorSurname?: ErrorMessageProps;
  loginInput?: TextInputProps;
  errorLogin?: ErrorMessageProps;
  emailInput?: EmailInputProps;
  errorEmail?: ErrorMessageProps;
  phoneInput?: PhoneInputProps;
  errorPhone?: ErrorMessageProps;
  passwordInput?: PasswordInputProps;
  errorPassword?: ErrorMessageProps;
  passwordAgainInput?: PasswordInputProps;
  errorPasswordAgain?: ErrorMessageProps;
  formButton?: ButtonProps;
}
