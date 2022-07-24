import { Component } from "../../core/component/component";

export class HistorySwitcher extends Component {
  protected getStateFromProps(): void {
    this.state = {
      onBack: () => window.router.back(),
      onForward: () => window.router.forward(),
    };
  }
  render() {
    console.log(this);
    return `<div class="history-switcher">
            {{{Button text="Back" onClick=onBack}}}
            {{{Button text="Forward" onClick=onForward}}}
        </div>
        `;
  }
}
