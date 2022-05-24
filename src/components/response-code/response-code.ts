import { Component } from "../../core/component/component";
import { template } from "./response-code.tmpl";

export class ResponseCode extends Component {
  public render() {
    return this.compile(template, this._props!);
  }
}
