import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";
import { User } from "../../services/api/auth/auth-types";
import { editPasswordAction } from "../../services/api/user/user-actions";

export class EditPassordPage extends Component {
  protected getStateFromProps(): void {
    const user = window.appStore.getState("user") as User;

    this.state = {
      avatar: user.avatar
        ? "https://ya-praktikum.tech/api/v2/resources" + user.avatar
        : null,
      isDirty: false,
      values: { oldPassword: "", newPassword: "" },
      validity: { oldPassword: true, newPassword: true },
      onChangeInput: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const nextState = {
          values: { ...this.state.values, [input.name]: input.value },
          validity: { ...this.state.validity, [input.name]: input.validity.valid },
        };

        this.state.isDirty = true;

        this.setState(nextState);
      },
      onEditPassword: (event: Event) => {
        event.preventDefault();
        const { values, validity, isDirty } = this.state;
        const isValid = Object.values(validity).every((value) => value === true);

        if (isDirty && isValid) {
          window.appStore.dispatch(editPasswordAction, values);
        }
      },
    };
  }

  public render() {
    return `
            <div class="profile">
                {{{Avatar src=avatar}}}
        
                <form>
                  <ul class="list">
                    <li class="list__element">
                        <span class="list__key">Старый пароль</span> 
                   
                        <span class="list__value">
                          {{{Input type="password"
                          value=values.oldPassword
                          isValid=validity.oldPassword
                          placeholder="Пароль" 
                          errorMessage="Введи коретный пароль"
                          name="oldPassword" 
                          ref="oldPassword" 
                          pattern="${Patterns.PASSWORD}" 
                          onChange=onChangeInput}}} 
                        </span>
                    </li>
                    
                    <li class="list__element">
                        <span class="list__key">Новый пароль</span> 

                        <span class="list__value">
                          {{{Input type="password"
                          value=values.newPassword
                          isValid=validity.newPassword
                          placeholder="Пароль" 
                          errorMessage="Введи коретный пароль"
                          name="newPassword" 
                          ref="newPassword" 
                          pattern="${Patterns.PASSWORD}" 
                        onChange=onChangeInput}}} 
                        </span>
                    </li>
                  </ul>
          
                  {{{Button text="Сохранить" type="submit" onClick=onEditPassword}}}
                </form>
           </div>`;
  }
}
