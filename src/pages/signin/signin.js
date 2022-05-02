import { registerForm } from "../../components";
import template from "./signin.hbs";
import signinStyles from "./signin.scss";

const registerationFormParams = {
  description: "Регистрация",
  inputElements: [
    {
      class: "input",
      type: "email",
      placeholder: "Почта",
    },
    {
      class: "input",
      type: "text",
      placeholder: "Логин",
    },
    {
      class: "input",
      type: "text",
      placeholder: "Фамилия",
    },
    {
      class: "input",
      type: "tel",
      placeholder: "Телефон",
    },
    {
      class: "input",
      type: "password",
      placeholder: "Пароль",
    },
    {
      class: "input",
      type: "password",
      placeholder: "Пароль(еще раз)",
    },
  ],

  buttonElement: {
    content: "Зарегистрироваться",
    class: "button",
  },
  linkElement: {
    content: "Войти",
    href: "#",
  },
};

registerForm("registerationForm");

export const signinPageHTML = () => {
  return template(registerationFormParams);
};
