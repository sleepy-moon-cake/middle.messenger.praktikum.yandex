import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";
import { User } from "../../services/api/auth/auth-types";
import { editProfileAction } from "../../services/api/user/user-actions";

export class EditProfilePage extends Component {
  protected getStateFromProps(): void {
    const user = window.appStore.getState("user") as User;

    this.state = {
      avatar: user.avatar
        ? "https://ya-praktikum.tech/api/v2/resources" + user.avatar
        : null,
      isDirty: false,
      values: {
        email: user.email,
        login: user.login,
        first_name: user.first_name,
        second_name: user.second_name,
        display_name: user.display_name,
        phone: user.phone,
      },
      validity: {
        email: true,
        login: true,
        first_name: true,
        second_name: true,
        display_name: true,
        phone: true,
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
      onEditProfile: (event: Event) => {
        event.preventDefault();
        const { values, validity, isDirty } = this.state;
        const isValid = Object.values(validity).every((value) => value === true);

        if (isDirty && isValid) {
          window.appStore.dispatch(editProfileAction, values);
        }
      },
    };
  }

  public render() {
    return `
          <div class="profile">
          {{#Button content=true}} {{{Avatar src=avatar}}} {{/Button}}
      {{{Modal}}}
              <form>
                <ul class="list">
                    <li class="list__element">
                        <span class="list__key">Почта</span> 
                        
                        <span class="list__value">
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
                        </span>
                    </li>

                    <li class="list__element">
                        <span class="list__key">Логин</span> 
                        
                        <span class="list__value">
                          {{{Input type="text"
                            value=values.login 
                            isValid=validity.login
                            placeholder="Логин" 
                            errorMessage="Введите коретный логин" 
                            name="login"
                            ref="login" 
                            pattern="${Patterns.LOGIN}" 
                            onChange=onChangeInput}}}
                        </span>
                    </li>

                    <li class="list__element">
                        <span class="list__key">Имя</span> 

                        <span class="list__value">
                          {{{Input type="text"
                          value=values.first_name 
                          isValid=validity.first_name
                          placeholder="Имя" 
                          errorMessage="Введите коретное имя" 
                          name="first_name"
                          ref="first_name" 
                          pattern="${Patterns.NAME}" 
                          onChange=onChangeInput}}}
                        </span>
                    </li>

                    <li class="list__element">
                        <span class="list__key">Фамилия</span> 
                        
                        <span class="list__value">
                          {{{Input type="text"
                          value=values.second_name 
                          isValid=validity.second_name
                          placeholder="Фамилия" 
                          errorMessage="Введите коретную фамилию" 
                          name="second_name"
                          ref="second_name" 
                          pattern="${Patterns.NAME}" 
                          onChange=onChangeInput}}}
                          </span>
                    </li>

                    <li class="list__element">
                    <span class="list__key">Имя в чате</span> 
                    
                    <span class="list__value">
                      {{{Input type="text"
                      value=values.display_name 
                      isValid=validity.display_name
                      placeholder="Имя в чате" 
                      errorMessage="Введите коретное имя" 
                      name="display_name"
                      ref="display_name" 
                      pattern="${Patterns.LOGIN}" 
                      onChange=onChangeInput}}}
                      </span>
                    </li>

                    <li class="list__element">
                      <span class="list__key">Телефон</span>

                      <span class="list__value">
                          {{{Input type="phone"
                          value=values.phone
                          isValid=validity.phone
                          placeholder="Телефон" 
                          errorMessage="Введите коретный телефон" 
                          name="phone"
                          ref="phone" 
                          pattern="${Patterns.PHONE}" 
                          onChange=onChangeInput}}}
                      </span>
                    </li>

                </li>
                </ul>
        
                {{{Button text="Сохранить" type="submit" onClick=onEditProfile}}}
              </form>
         </div>`;
  }
}
