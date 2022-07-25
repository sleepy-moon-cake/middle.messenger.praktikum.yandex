import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";
import { signinAction } from "../../services/api/auth/auth-actions";

export class SigninPage extends Component {
  constructor(props) {
    super(props);

    this.setProps({
      onSignin: (e: Event) => {
        this.onSignin(e);
      },
      onChangeInput: (e: Event) => {
        this.onChangeInput(e);
      },
    });
  }
  protected getStateFromProps() {
    this.state = {
      isDirty: false,
      values: {
        login: "",
        password: "",
      },
      validity: {
        login: true,
        password: true,
      },
    };
  }

  onSignin(event: Event) {
    event.preventDefault();
    const { validity, values, isDirty } = this.state;
    const isValid = Object.values(validity).every((value) => value === true);

    if (isDirty && isValid) {
      window.appStore.dispatch(signinAction, values);
    }
  }

  onChangeInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const nextState = {
      ...this.state,
      values: { ...this.state.values, [input.name]: input.value },
      validity: { ...this.state.validity, [input.name]: input.validity.valid },
      isDirty: true,
    };
    this.setState(nextState);
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
                {{{Input type="text"
                  value=values.login 
                  isValid=validity.login
                  placeholder="Логин" 
                  errorMessage="Введи коретный логин" 
                  name="login"
                  ref="login" 
                  pattern="${Patterns.LOGIN}" 
                  onChange=onChangeInput}}}
              </li>
              <li class="form__input">
                {{{Input type="password"
                  value=values.password
                  isValid=validity.password
                  placeholder="Пароль" 
                  errorMessage="Введи коретный пароль"
                  name="password" 
                  ref="password" 
                  pattern="${Patterns.PASSWORD}" 
                  onChange=onChangeInput}}} 
              </li>
          </ul>
      
          <div class="form__actions">
              {{{Button text="Авторизоваться" type="button" onClick=onSignin }}}
      
              {{{Link text="Нет аккаунта?" rout="/signup"}}}
          </div>
        </form>
      </div>
    </div>
   `;
  }
}
