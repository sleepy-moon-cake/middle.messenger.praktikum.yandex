import { Component } from "../../core/component/component";

export class List extends Component {
  public render() {
    return `<ul class="list {{class}}">
    {{#each items}}
        <li class="list__element">
            <span class="list__key">{{key}}</span> 
            <span class="list__value">{{value}}</span>
        </li>
    {{/each}}
</ul>`;
  }
}
