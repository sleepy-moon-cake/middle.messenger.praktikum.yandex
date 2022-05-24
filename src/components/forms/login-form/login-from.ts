import { Component } from "../../../core/component/component";
import { template } from "./login-form.tmpl";

export class LoginForm extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
