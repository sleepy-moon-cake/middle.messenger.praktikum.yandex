import { Component } from "../../../core/component/component";

export class Avatar extends Component {
  public render() {
    return `<span class="avatar"><img src="{{src}}" alt="{{alt}}"></span>`;
  }
}
