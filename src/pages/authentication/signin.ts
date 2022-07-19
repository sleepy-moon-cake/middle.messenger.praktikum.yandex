import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";

export class SigninPage extends Component {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: "",
        password: "",
      },
      validity: {
        login: true,
        password: true,
      },
      onChangeInput: (e: Event) => {
        const input = e.target as HTMLInputElement;

        const nextState = {
          values: { ...this.state.values, [input.name]: input.value },
          validity: { ...this.state.validity, [input.name]: input.validity.valid },
        };
        debugger;
        this.setState(nextState);
      },
      signin: (event: Event) => {
        event.preventDefault();
        //TODO: Handle case
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
              {{{Button text="Авторизоваться" type="submit" summ="sdas" onClick=signin }}}
      
              {{{Link text="Нет аккаунта?" href="/signup"}}}
          </div>
        </form>
      </div>
    </div>
   `;
  }
}
