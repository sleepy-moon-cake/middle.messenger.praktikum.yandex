import { Component } from "../../core/component/component";
import { template } from "./form.tmpl";

export class Form extends Component {
  public render() {
    return this.compile(template, this._props);
  }
  public getEventTargetElement(): HTMLElement {
    return this.getElement().querySelector("form")!;
  }
}
