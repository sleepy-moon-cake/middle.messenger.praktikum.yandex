import { Component } from "../../core/component/component";
import { template } from "./code.tmpl";

export class Code extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
