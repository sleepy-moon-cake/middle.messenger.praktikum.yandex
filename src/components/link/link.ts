import { Component } from "../../core/component/component";
import { template } from "./link.tmpl";

export class Link extends Component {
  render() {
    return this.compile(template, this._props);
  }
}
