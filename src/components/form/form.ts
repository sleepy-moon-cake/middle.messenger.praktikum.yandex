import { Component } from "../../core/component/component";

export class Form extends Component {
  public render() {

    return `<form action="" class="form">
        <h4 class="form__header">{{description}}</h4>

              
        <ul class="form__inputs">
            {{{items}}}
        </ul>
    
        <div class="form__actions">
            {{{button}}}
    
            {{{link}}}
        </div>
    </form>`;
  }
}

// / const authorizationForm = new Form({
//   description: "Вход",
//   items: [
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
//     content: "Нет аккаунта?",
//     href: "/signup",
//     listeners: [
//       {
//         click: function (e: Event) {
//           e.preventDefault();
//           window.router.go("/signup");
//         },
//       },
//     ],
//   }),
//
// });
