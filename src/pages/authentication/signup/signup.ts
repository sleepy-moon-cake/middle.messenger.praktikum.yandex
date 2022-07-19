// import { Button, ErrorMessage, Form, Input, Link } from "../../../components";
// import { router } from "../../../core/router/router";
// import { Patterns } from "../../../models/enums/patterns";
// import { signup } from "../../../services/api/auth/auth-actions";
// import { errorMessageHandler } from "../../../utils/errorMessagehandler.util";
// import { Authentication } from "../authentication";

// const mailErrorMessage = new ErrorMessage({ message: "Не корректный  mail" });
// const loginErrorMessage = new ErrorMessage({ message: "Не корректный  логин" });
// const surnameErrorMessage = new ErrorMessage({ message: "Не корректная  фамилия" });
// const nameErrorMessage = new ErrorMessage({ message: "Не корректное  имя" });
// const phoneErrorMessage = new ErrorMessage({ message: "Не корректное  телефон" });
// const passwordErrorMessage = new ErrorMessage({ message: "Не корректное  пароль" });

// const registerationForm = new Form({
//   description: "Регистрация",
//   items: [
//     new Input({
//       type: "email",
//       class: "form__input",
//       placeholder: "Почта",
//       label: "Почта",
//       name: "email",
//       pattern: Patterns.MAIL,
//       errorMessage: mailErrorMessage,
//       listeners: [
//         {
//           blur: errorMessageHandler(mailErrorMessage),
//         },
//       ],
//     }),
//     new Input({
//       type: "text",
//       class: "form__input",
//       placeholder: "Логин",
//       label: "Логин",
//       name: "login",
//       pattern: Patterns.LOGIN,
//       errorMessage: loginErrorMessage,
//       listeners: [
//         {
//           blur: errorMessageHandler(loginErrorMessage),
//         },
//       ],
//     }),
//     new Input({
//       type: "text",
//       class: "form__input",
//       placeholder: "Фамилия",
//       label: "Фамилия",
//       name: "second_name",
//       pattern: Patterns.NAME,
//       errorMessage: surnameErrorMessage,
//       listeners: [
//         {
//           blur: errorMessageHandler(surnameErrorMessage),
//         },
//       ],
//     }),
//     new Input({
//       type: "text",
//       class: "form__input",
//       placeholder: "Имя",
//       label: "Имя",
//       name: "first_name",
//       pattern: Patterns.NAME,
//       errorMessage: nameErrorMessage,
//       listeners: [
//         {
//           blur: errorMessageHandler(nameErrorMessage),
//         },
//       ],
//     }),
//     new Input({
//       type: "tel",
//       class: "form__input",
//       placeholder: "Телефон",
//       name: "phone",
//       label: "Телефон",
//       pattern: Patterns.PHONE,
//       errorMessage: phoneErrorMessage,
//       listeners: [
//         {
//           blur: errorMessageHandler(phoneErrorMessage),
//         },
//       ],
//     }),
//     new Input({
//       type: "password",
//       class: "form__input",
//       placeholder: "Пароль",
//       label: "Пароль",
//       name: "password",
//       pattern: Patterns.PASSWORD,
//       errorMessage: passwordErrorMessage,
//       listeners: [
//         {
//           blur: errorMessageHandler(passwordErrorMessage),
//         },
//       ],
//     }),
//   ],
//   button: new Button({ content: "Авторизоваться" }),
//   link: new Link({
//     content: "Войти?",
//     href: "/signin",
//     listeners: [
//       {
//         click: function (e: Event) {
//           e.preventDefault();
//           window.router.go("/signin");
//         },
//       },
//     ],
//   }),
//   listeners: [
//     {
//       submit: async function (e: Event) {
//         e.preventDefault();
//         const form = e.target as HTMLFormElement;
//         const inputs = Array.from(form.querySelectorAll("input"));
//         const result = inputs.reduce((registry: Record<string, string>, input) => {
//           registry[input.name] = input.value;
//           return registry;
//         }, {});

//         window.appStore.dispatch(signup, result);
//       },
//     },
//   ],
// });

// export const signupPage = new Authentication({
//   form: registerationForm,
//   backButton: new Button({
//     content: "Back",
//     listeners: [
//       {
//         click: function () {
//           router.back();
//         },
//       },
//     ],
//   }),
//   forwardButton: new Button({
//     content: "Forward",
//     listeners: [
//       {
//         click: function () {
//           router.forward();
//         },
//       },
//     ],
//   }),
// });
