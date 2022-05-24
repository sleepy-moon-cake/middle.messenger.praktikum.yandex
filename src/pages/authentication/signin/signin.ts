import { Button } from "../../../components/button/button";
import { SigninForm } from "../../../components/forms/signin-form/signin-form";
import { Input } from "../../../components/input/input";
import { Link } from "../../../components/link/link";
import { Authentication } from "../authentication";

const registerationForm = new SigninForm({
  description: "Регистрация",
  mailInput: new Input({ type: "email", placeholder: "Почта" }),
  loginInput: new Input({ type: "text", placeholder: "Логин" }),
  surnameInput: new Input({ type: "text", placeholder: "Фамилия" }),
  phoneInput: new Input({ type: "tel", placeholder: "Телефон" }),
  passwordInput: new Input({ type: "password", placeholder: "Пароль" }),
  confirmPasswordInput: new Input({ type: "password", placeholder: "Пароль(еще раз)" }),
  button: new Button({ content: "Авторизоваться" }),
  link: new Link({ content: "Войти?" }),
});

export const signinPage = new Authentication({ form: registerationForm });
