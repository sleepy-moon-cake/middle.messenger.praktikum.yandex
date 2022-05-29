import { Component } from "../../core/component/component";
import { template } from "./input.tmpl";

export class Input extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
