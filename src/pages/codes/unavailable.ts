import { Component } from "../../core/component/component";

export class UnavailablePage extends Component {
  public render() {
    return `<div class="code">
    {{{HistorySwitcher}}}
    {{{ResponseCode code="404" text="Не туда попали" }}}
    </div>`;
  }
}
