import {
  PopupAvatarProps,
  ButtonProps,
  ErrorMessageProps,
  EmailInputProps,
  PasswordInputProps,
  PhoneInputProps,
  TextInputProps,
} from "../../components";
import { Props } from "../../core/types";

export interface SettingsPageProps extends Props {
  avatarImgSrc: string | null;
  nameInput: TextInputProps;
  errorName: ErrorMessageProps;
  surnameInput: TextInputProps;
  errorSurname: ErrorMessageProps;
  displayNameInput: TextInputProps;
  loginInput: TextInputProps;
  errorLogin: ErrorMessageProps;
  emailInput: EmailInputProps;
  errorEmail: ErrorMessageProps;
  phoneInput: PhoneInputProps;
  errorPhone: ErrorMessageProps;
  changeDataButton: ButtonProps;
  oldPasswordInput: PasswordInputProps;
  errorOldPassword: ErrorMessageProps;
  passwordInput: PasswordInputProps;
  errorPassword: ErrorMessageProps;
  passwordAgainInput: PasswordInputProps;
  errorPasswordAgain: ErrorMessageProps;
  changePasswordButton: ButtonProps;
  popupAvatar: PopupAvatarProps;
}
