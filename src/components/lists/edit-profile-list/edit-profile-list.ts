import { Component } from "../../../core/component/component";
import { template } from "./edit-profile-list.tmpl";

export class EditProfileList extends Component {
  public render() {
    return this.compile(template, this._props);
  }
}
