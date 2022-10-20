import { FormButtonProps } from "../../components/button/button";
import { ErrorMessageProps } from "../../components/error-message/error-message";
import { PasswordInputProps } from "../../components/inputs/password/password-input";
import { TextInputProps } from "../../components/inputs/text/text-input";
import { Props } from "../../core/types";

export interface SignInPageProps extends Props {
  welcomeImgSrc?: string | null;
  loginInput?: TextInputProps;
  errorLogin?: ErrorMessageProps;
  passwordInput?: PasswordInputProps;
  errorPassword?: ErrorMessageProps;
  formButton?: FormButtonProps;
}
