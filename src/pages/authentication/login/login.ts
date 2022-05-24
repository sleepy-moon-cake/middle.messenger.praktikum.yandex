import { Button } from "../../../components/button/button";
import { LoginForm } from "../../../components/forms/login-form/login-from";
import { Input } from "../../../components/input/input";
import { Link } from "../../../components/link/link";
import { Authentication } from "../authentication";

const authorizationForm = new LoginForm({
  description: "Вход",
  loginInput: new Input({ type: "text", placeholder: "Логин" }),
  passwordInput: new Input({ type: "password", placeholder: "Пароль" }),
  button: new Button({ content: "Авторизоваться" }),
  link: new Link({ content: "Нет аккаунта?" }),
});

export const loginPage = new Authentication({ form: authorizationForm });
