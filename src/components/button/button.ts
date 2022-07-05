import { Component } from "../../core/component/component";
import { template } from "./button.tmpl";

export class Button extends Component {
  public render(): DocumentFragment {
    return this.compile(template, this._props);
  }
}
