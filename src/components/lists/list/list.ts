import { Component } from "../../../core/component/component";
import { template } from "./list.tmpl";

export class List extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
