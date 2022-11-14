import {
  TextInputProps,
  ButtonProps,
  ErrorMessageProps,
  PasswordInputProps,
} from "../../components";
import { Props } from "../../core/types";

export interface SignInPageProps extends Props {
  welcomeImgSrc?: string | null;
  loginInput?: TextInputProps;
  errorLogin?: ErrorMessageProps;
  passwordInput?: PasswordInputProps;
  errorPassword?: ErrorMessageProps;
  formButton?: ButtonProps;
}
