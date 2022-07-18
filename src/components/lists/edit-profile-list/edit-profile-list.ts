import { Component } from "../../../core/component/component";

export class EditProfileList extends Component {
  public render() {
    return `
    <ul class="list {{class}}">
        <li class="list__element">
            <span class="list__key">{{mail}}</span> 
            <span class="list__value">{{{mailInput}}}</span>
        </li>

        <li class="list__element">
            <span class="list__key">{{login}}</span> 
            <span class="list__value">{{{loginInput}}}</span>
        </li>

        <li class="list__element">
            <span class="list__key">{{name}}</span> 
            <span class="list__value">{{{nameInput}}}</span>
        </li>

        <li class="list__element">
            <span class="list__key">{{surname}}</span> 
            <span class="list__value">{{{surnameInput}}}</span>
        </li>

        <li class="list__element">
            <span class="list__key">{{phone}}</span> 
            <span class="list__value">{{{phoneInput}}}</span>
        </li>

        <li class="list__element">
            <span class="list__key">{{password}}</span> 
            <span class="list__value">{{{passwordInput}}}</span>
        </li>
    </ul>
`;
  }
}
