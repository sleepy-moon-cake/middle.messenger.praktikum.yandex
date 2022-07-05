import { Component } from "../../core/component/component";
import { template } from "./chat.tmpl";

export class Chat extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
