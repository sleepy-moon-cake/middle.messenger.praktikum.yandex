import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";

export class EditPassordPage extends Component {
  protected getStateFromProps(): void {
    this.state = {
      imagesrc: "/",

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
                    <li class="list__element">
                        <span class="list__key">Старый пароль</span> 
                        <span class="list__value">
                        {{{Input value="123" type="password" pattern="${Patterns.PASSWORD}" errorMessage="Не --"}}}<
                        /span>
                    </li>
                    <li class="list__element">
                        <span class="list__key">Новый пароль</span> 
                        <span class="list__value">
                        {{{Input value="123" type="password"  pattern="${Patterns.PASSWORD}"  errorMessage="Не --"}}}<
                        /span>
                    </li>
                    <li class="list__element">
                        <span class="list__key">Повторите новый пароль</span> 
                        <span class="list__value">
                        {{{Input value="123" type="password"  pattern="${Patterns.PASSWORD}"  errorMessage="Не --"}}}<
                        /span>
                    </li>
                  </ul>
          
                  {{{Button text="Сохранить" type="submit" onClick=submit}}}
                </form>
           </div>`;
  }
}
