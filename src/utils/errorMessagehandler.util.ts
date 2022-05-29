import { ErrorMessage } from "../components/error-message/error-message";

export function errorMessageHandler(errorMessage: ErrorMessage) {
  return function (event: Event) {
    const isValid = (event.target as HTMLInputElement).validity.valid;

    isValid ? errorMessage.hide() : errorMessage.show();
  };
}
