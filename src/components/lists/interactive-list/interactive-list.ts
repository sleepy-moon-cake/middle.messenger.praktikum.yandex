import { Component } from "../../../core/component/component";

export class InteractiveList extends Component {
  public render() {
    return `
    <ul class="list {{class}}">
        <li class="list__element">
            {{{editData}}}
        </li>

        <li class="list__element">
            {{{editPassword}}}
        </li>

        <li class="list__element">
            {{{exit}}}
        </li>
    </ul>
`;
  }
}
