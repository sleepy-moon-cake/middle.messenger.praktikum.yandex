import { Component } from "../../core/component/component";

export type FileModalProps = {
  onCloseModal: () => any;
  title: string;
  button_text: string;
};

export class Modal extends Component {
  constructor({ button_text, title, onCloseModal }: FileModalProps) {
    super({
      button_text,
      title,
      onCloseModal,
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLElement;
          if (
            (target && target.className === "modal__layout") ||
            target.className === "modal__close"
          ) {
            this.props.onCloseModal({});
          }
        },
      },
    });
  }

  protected getStateFromProps(): void {
    this.state = {
      title: null,
      sendState: () => {
        const input = this.element!.querySelector("input") as HTMLInputElement;
        const value = input.value;

        if (input && value) {
          this.state.title = value;
        }

        this.props.onCloseModal(this.state);
      },
    };
  }

  render() {
    return `
    <div class="modal">
      <div class="modal__content">
      <h2 class="modal__title">{{title}}</h2>
      <button class="modal__close">&#x2715</button>

      <span class="modal__input">
        <form>  
          <label>
             <input type="text" placeholder="Введите название чата">
            </label>
        </form>  
      </span>

      <span class="modal__button">{{{Button text=button_text onClick=sendState}}}</span>
      </div>
      <div class="modal__layout"></div>
    <div>`;
  }
}
