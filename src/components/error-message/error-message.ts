import { Component } from "../../core/component/component";
import { template } from "./error-message.tmpl";

export class ErrorMessage extends Component {
  public render() {
    return this.compile(template, this._props);
  }
  public componentDidMount(): void {
    this.hide();
  }
}
