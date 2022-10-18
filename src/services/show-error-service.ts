import { DISPLAY_ERROR } from "../components/error-message/consts";
import { getEventName } from "../core/utils/get-event-name";
import { getPathFromArray } from "../core/utils/get-path-from-array";
import store from "../store/store";
import { FIELD_ERROR_TEXT } from "./form-services/constants";
import { HandleFormService, Invalid } from "./form-services/form-service";
import {
  FieldName,
  FormValidationService,
} from "./form-services/form-validation-service";

export abstract class ShowErrorService {
  protected handleFormService: HandleFormService;

  constructor() {
    const formValidationService = new FormValidationService();
    this.handleFormService = new HandleFormService(formValidationService);
  }

  protected validateFormItems(
    event: Event,
    pagePath: string,
    pageEventName: string
  ): boolean {
    const formValidItems = this.handleFormService.validateForm(event);

    return formValidItems.every((item) => {
      if (!item) return true;

      const pathError = getPathFromArray([pagePath, item.dataName]);
      const eventErrorName = getEventName(pageEventName, item.dataName);

      if (item.invalid) {
        this.showError(pathError, eventErrorName, item.invalid, item.fieldName);
        return false;
      }

      this.hideError(pathError, eventErrorName);
      return true;
    });
  }

  protected showError(
    path: string,
    eventName: string,
    error: Invalid,
    fieldName: FieldName
  ): void {
    const LoginErrorText = FIELD_ERROR_TEXT[fieldName];
    const textError = error?.text ? LoginErrorText.text : LoginErrorText.length;

    const errorProps = {
      addClass: DISPLAY_ERROR,
      textError: textError,
    };

    store.set(path, errorProps, eventName);
  }

  protected hideError(path: string, eventName: string): void {
    const errorProps = {
      addClass: "",
      textError: "",
    };
    store.set(path, errorProps, eventName);
  }
}
