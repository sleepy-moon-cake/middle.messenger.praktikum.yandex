import { Component } from "../../core/component/component";

export type FileModalProps = {
  onCloseModal: () => any;
};

export class FileModal extends Component {
  constructor({ onCloseModal }: FileModalProps) {
    super({
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
      file: null,
      sendFile: () => {
        const input = this.element!.querySelector("input") as HTMLInputElement;
        const isValid = input.validity.valid;
        const file = input.files ? input.files[0] : null;

        if (input && isValid && file) {
          this.state.file = file;
        }

        this.props.onCloseModal(this.state);
      },
    };
  }

  render() {
    return `
    <div class="modal">
      <div class="modal__content">
      <h2 class="modal__title">Загрузите файл</h2>
      <button class="modal__close">&#x2715</button>

      <span class="modal__input">
        <form>  
          <label class="modal__input-label">
             <span class="modal__input-text">Выбрать файл</span>
             <input class="modal__input-input"  type="file" accept="image/*">
            </label>
        </form>  
      </span>

      <span class="modal__button">{{{Button text="Применить" onClick=sendFile}}}</span>
      </div>
      <div class="modal__layout"></div>
    <div>`;
  }
}
