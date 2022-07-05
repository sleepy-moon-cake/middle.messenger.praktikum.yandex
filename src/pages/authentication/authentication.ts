import { Component } from "../../core/component/component";
import { template } from "./authentication.tmpl";

export class Authentication extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
