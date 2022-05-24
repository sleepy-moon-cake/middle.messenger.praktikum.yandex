import { Component } from "../../../core/component/component";
import { template } from "./sign-form.tmpl";

export class SigninForm extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
