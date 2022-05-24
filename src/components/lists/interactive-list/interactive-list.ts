import { Component } from "../../../core/component/component";
import { template } from "./interactive-list.tmpl";

export class InteractiveList extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
