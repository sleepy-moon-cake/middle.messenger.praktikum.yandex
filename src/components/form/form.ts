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
