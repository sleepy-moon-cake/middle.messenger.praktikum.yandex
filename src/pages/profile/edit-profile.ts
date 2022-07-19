import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";

export class EditProfilePage extends Component {
  protected getStateFromProps(): void {
    this.state = {
      name: "Иван",
      imagesrc: "/",
      items: [
        {
          key: "Почта",
          value: "@pochta.ru",
          type: "email",
          name: "email",
          errorMessage: "Не корректный  mail",
          pattern: Patterns.MAIL,
        },
        {
          key: "Логин",
          value: "ivanivanov",
          type: "text",
          name: "login",
          errorMessage: "Не корректный  логин",
          pattern: Patterns.LOGIN,
        },
        {
          key: "Имя",
          value: "Иван",
          type: "text",
          name: "first_name",
          errorMessage: "Не корректное  имя",
          pattern: Patterns.NAME,
        },
        {
          key: "Фамилия",
          value: "Иванов",
          type: "text",
          name: "second_name",
          errorMessage: "Не корректное  фамилию",
          pattern: Patterns.NAME,
        },
        {
          key: "Имя в чате",
          value: "Иван",
          type: "text",
          name: "EMPTY_name",
          errorMessage: "Не корректное  имя",
          pattern: Patterns.NAME,
        },
        {
          key: "Телефон",
          value: "+7 (909) 967 30 30",
          type: "phone",
          name: "phone",
          errorMessage: "Не корректный  телефон",
          pattern: Patterns.PHONE,
        },
      ],
      submit: (e: Event) => {
        debugger;
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const inputs = Array.from(form.querySelectorAll("input"));
        const result = inputs.reduce((registry: Record<string, string>, input) => {
          registry[input.name] = input.value;
          return registry;
        }, {});

        console.log(result);
      },
    };
  }

  public render() {
    return `
          <div class="profile">
              {{{Avatar src="/"}}}
      
              <form>
                <ul class="list">
                    {{#each items}}
                        <li class="list__element">
                            <span class="list__key">{{key}}</span> 
                            <span class="list__value">{{{Input value="{{value}}" }}}</span>
                        </li>
                    {{/each}}
                </ul>
        
                {{{Button text="Сохранить" type="submit" onClick=submit}}}
              </form>
         </div>`;
  }
}
