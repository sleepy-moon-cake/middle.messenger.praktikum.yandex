import { Component } from "../../core/component/component";

export class ErrorMessage extends Component {
  public render() {
    return `
    <p> {{text}} </p>
    `;
  }
}
