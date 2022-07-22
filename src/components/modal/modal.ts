import { Component } from "../../core/component/component";

export type ModalProps = {
  onCloseModal: () => any;
};

export class Modal extends Component {
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
