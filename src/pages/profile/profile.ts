import { Component } from "../../core/component/component";

export class ProfilePage extends Component {
  protected getStateFromProps(props: any): void {
    this.state = {
      name: "Иван",
      imagesrc: "/",
      items: [
        {
          key: "Почта",
          value: "@pochta.ru",
        },
        {
          key: "Логин",
          value: "ivanivanov",
        },
        {
          key: "Имя",
          value: "Иван",
        },
        {
          key: "Фамилия",
          value: "Иванов",
        },
        {
          key: "Имя в чате",
          value: "Иван",
        },
        {
          key: "Телефон",
          value: "+7 (909) 967 30 30",
        },
      ],
    };
  }

  public render() {
    return `
        <div class="profile">
            {{{Avatar src="/"}}}
        
            <p class="profile__name">{{{name}}}</p>
    
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
                    {{{Link text="Изменить данные"}}}
                </li>
        
                <li class="list__element">
                    {{{Link text="Изменить пароль"}}}
                </li>
        
                <li class="list__element list__element--exit">
                    {{{Link text="Выйти"}}}
                </li>
             </ul>
       </div>`;
  }
}
