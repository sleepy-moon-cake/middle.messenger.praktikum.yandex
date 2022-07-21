import { Component } from "../../core/component/component";

export type ButtonProps = {
  type: string;
  text: string;
  content: boolean;
  onClick: () => void;
};

export class Button extends Component {
  constructor({ content, text, type, onClick }: ButtonProps) {
    super({ content, text, type, events: { click: onClick } });
  }

  public render(): string {
    return `<button class="${
      this.props.content ? "button--with-content" : "button"
    }" type="{{type}}"> 
      <div data-layout="1"></div>
      {{text}} 
    </button>`;
  }
}
