import { Component } from "../../core/component/component";
import { signoutAction } from "../../services/api/auth/auth-actions";
import { User } from "../../services/api/auth/auth-types";

export class ProfilePage extends Component {
  protected getStateFromProps(): void {
    const user = (window.appStore.getState("user") as User) || null;
    let display_name, imagesrc, items;

    if (user) {
      display_name = user.display_name;
      imagesrc = user.avatar;
      items = [
        {
          key: "Почта",
          value: user.email,
        },
        {
          key: "Логин",
          value: user.login,
        },
        {
          key: "Имя",
          value: user.first_name,
        },
        {
          key: "Фамилия",
          value: user.second_name,
        },
        {
          key: "Имя в чате",
          value: user.display_name,
        },
        {
          key: "Телефон",
          value: user.phone,
        },
      ];
    }

    this.state = {
      avatar: user.avatar
        ? "https://ya-praktikum.tech/api/v2/resources" + user.avatar
        : null,
      onSignout: (e: Event) => {
        e.preventDefault();
        window.appStore.dispatch(signoutAction);
      },
      display_name,
      imagesrc,
      items,
    };
  }

  public render() {
    return `
        <div class="profile">
        {{{HistorySwitcher}}}
            {{{Avatar src=avatar}}}
        
            <p class="profile__name">{{{display_name}}}</p>
    
            <ul class="list">
                {{#each items}}
                    <li class="list__element">
                        <span class="list__key">{{key}}</span> 
                        <span class="list__value">{{value}}</span>
                    </li>
                {{/each}}
            </ul>
    
            <ul class="list">
                <li class="list__element">
                    {{{Link text="Изменить данные" rout="/edit-profile"}}}
                </li>
        
                <li class="list__element">
                    {{{Link text="Изменить пароль" rout="/edit-password"}}}
                </li>
        
                <li class="list__element list__element--exit">
                    {{{Button text="Выйти" onClick=onSignout}}}
                </li>
             </ul>
       </div>`;
  }
}
