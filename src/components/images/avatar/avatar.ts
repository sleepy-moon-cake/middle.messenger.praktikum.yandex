import { Component } from "../../../core/component/component";
import { template } from "./avatart.tmpl";

export class Avatar extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
