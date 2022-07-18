import { Component } from "../../core/component/component";

export class NotFoundPage extends Component {
  public render() {
    return `<div class="code">{{{ResponseCode code="505" text="Мы уже фиксим" }}}</div>`;
  }
}
