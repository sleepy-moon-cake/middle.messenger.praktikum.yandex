import { Component } from "../../core/component/component";
import { template } from "./input.tmpl";

export class Input extends Component {
  public render() {
    return this.compile(template, this._props);
  }
  public componentDidMount(): void {
    const { errorMessage } = this._children;

    if (errorMessage) {
      this.getElement().addEventListener("input", (event: Event) => {
        const isValid = (event.target as HTMLInputElement).validity.valid;

        isValid ? errorMessage.hide() : errorMessage.show();
      });
    }
  }
}
