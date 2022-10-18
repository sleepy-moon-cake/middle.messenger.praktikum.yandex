import { ErrorMessageProps } from "../../components/error-message/error-message";
import { FormButtonProps } from "../../components/form-button/form-button";
import { EmailInputProps } from "../../components/inputs/email/email-input";
import { PasswordInputProps } from "../../components/inputs/password/password-input";
import { PhoneInputProps } from "../../components/inputs/phone/phone-input";
import { TextInputProps } from "../../components/inputs/text/text-input";
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
  formButton?: FormButtonProps;
}
