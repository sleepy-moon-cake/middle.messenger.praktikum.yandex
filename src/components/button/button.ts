import { Component } from "../../core/component/component";

export type ButtonProps = {
  type: string;
  text: string;
  onClick: () => void;
};

export class Button extends Component {
  constructor({ text, type, onClick }: ButtonProps) {
    super({ text, type, events: { click: onClick } });
  }

  public render(): string {
    return '<button class="button" type="{{type}}">{{text}}</button>';
  }
}
