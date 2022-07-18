import { Component } from "../../core/component/component";
import { Patterns } from "../../models/enums/patterns";

export type InpurProps = {
  errorMessage: string;
  type: string;
  value: any;
  name: string;
  isValid: boolean;
  error: any;
  placeholder: string;
  pattern: Patterns;
  required: boolean | null;
  onChange?: () => void;
};

export class Input extends Component {
  constructor({
    errorMessage,
    required = false,
    pattern,
    placeholder,
    isValid = false,
    name,
    value,
    type,
    onChange = () => {},
  }: InpurProps) {
    super({
      errorMessage,
      name,
      value,
      type,
      isValid,
      required,
      pattern,
      placeholder,
      events: { input: onChange },
    });
  }
  public render() {
    return `
    <label>
        <input class="input" type="{{type}}" value="{{value}}" name={{name}} placeholder="{{placeholder}}"  pattern="{{pattern}}" required={{required}} />

        {{#unless isValid}} {{{ErrorMessage text=errorMessage }}} {{/unless}}
    </label>
      `;
  }
}
