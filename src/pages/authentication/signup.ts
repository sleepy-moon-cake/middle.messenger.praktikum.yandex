import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";
import { signupAction } from "../../services/api/auth/auth-actions";

export class SignupPage extends Component {
  protected getStateFromProps() {
    this.state = {
      isDirty: false,
      values: {
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        phone: "",
        password: "",
      },
      validity: {
        email: true,
        login: true,
        first_name: true,
        second_name: true,
        phone: true,
        password: true,
      },
      onChangeInput: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const nextState = {
          values: { ...this.state.values, [input.name]: input.value },
          validity: { ...this.state.validity, [input.name]: input.validity.valid },
        };

        this.state.isDirty = true;

        this.setState(nextState);
      },
      signin: (event: Event) => {
        event.preventDefault();
        const { values, validity, isDirty } = this.state;
        const isValid = Object.values(validity).every((value) => value === true);

        if (isDirty && isValid) {
          window.appStore.dispatch(signupAction, values);
        }
      },
    };
  }

  public render() {
    return `
    <div>
      <div class="display-flex justify-content-space-between ">
        {{{Button type="button" text="Back" }}} 
        {{{Button type="button" text="Forward"}}}
      </div>

      <div class="authentication">
        <form action="" class="form">
          <h4 class="form__header"> Вход</h4>
                
          <ul class="form__inputs">
          <li class="form__input">
                {{{Input type="email"
                  value=values.email 
                  isValid=validity.email
                  placeholder="Почта" 
                  errorMessage="Введите коретную почту" 
                  name="email"
                  ref="email" 
                  pattern="${Patterns.MAIL}" 
                  onChange=onChangeInput
                  }}}
              </li>
              <li class="form__input">
                {{{Input type="text"
                  value=values.login 
                  isValid=validity.login
                  placeholder="Логин" 
                  errorMessage="Введите коретный логин" 
                  name="login"
                  ref="login" 
                  pattern="${Patterns.LOGIN}" 
                  onChange=onChangeInput}}}
              </li>
              <li class="form__input">
                {{{Input type="text"
                  value=values.first_name 
                  isValid=validity.first_name
                  placeholder="Имя" 
                  errorMessage="Введите коретное имя" 
                  name="first_name"
                  ref="first_name" 
                  pattern="${Patterns.NAME}" 
                  onChange=onChangeInput}}}
              </li>
              <li class="form__input">
              {{{Input type="text"
                value=values.second_name 
                isValid=validity.second_name
                placeholder="Фамилия" 
                errorMessage="Введите коретную фамилию" 
                name="second_name"
                ref="second_name" 
                pattern="${Patterns.NAME}" 
                onChange=onChangeInput}}}
            </li>
              <li class="form__input">
                {{{Input type="phone"
                  value=values.phone
                  isValid=validity.phone
                  placeholder="Телефон" 
                  errorMessage="Введите коретный телефон" 
                  name="phone"
                  ref="phone" 
                  pattern="${Patterns.PHONE}" 
                  onChange=onChangeInput}}}
              </li>
              <li class="form__input">
                {{{Input type="password"
                  value=values.password
                  isValid=validity.password
                  placeholder="Пароль" 
                  errorMessage="Введите коретный пароль"
                  name="password" 
                  ref="password" 
                  pattern="${Patterns.PASSWORD}" 
                  onChange=onChangeInput}}} 
              </li>
          </ul>
      
          <div class="form__actions">
              {{{Button text="Авторизоваться" type="submit" onClick=signin }}}
      
              {{{Link text="Войти" rout="/signin"}}}
          </div>
        </form>
      </div>
    </div>
   `;
  }
}
