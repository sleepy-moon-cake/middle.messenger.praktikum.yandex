import { UserSignInController } from "../../controllers/auth-controllers/signin-controller";
import { Events } from "../../core/types";
import { getEventName } from "../../core/utils/get-event-name";
import { router } from "../../index";
import { FieldName } from "../../services/form-services/constants";
import { ShowErrorService } from "../../services/show-error-service";
import { SIGNIN_PAGE_EVENT_NAME } from "./events";

class SignInService extends ShowErrorService {
  public signinEvents: Events = {
    click: [
      {
        id: "goToSignUp",
        fn: (event) => {
          event.preventDefault();
          router.go("/sign-up");
        },
      },
    ],
    focus: [
      {
        id: "login",
        fn: (event) => {
          this.handleFormService.handleFieldFocus(event);
        },
      },
      {
        id: "password",
        fn: (event) => {
          this.handleFormService.handleFieldFocus(event);
        },
      },
    ],
    blur: [
      {
        id: "login",
        fn: (event) => {
          const error = this.handleFormService.handleFieldBlur(event);

          if (!error) {
            this.hideError(
              "signInPage.errorLogin",
              getEventName(SIGNIN_PAGE_EVENT_NAME, "errorLogin")
            );
          } else {
            this.showError(
              "signInPage.errorLogin",
              getEventName(SIGNIN_PAGE_EVENT_NAME, "errorLogin"),
              error,
              FieldName.Login
            );
          }
        },
      },
      {
        id: "password",
        fn: (event) => {
          const error = this.handleFormService.handleFieldBlur(event);

          if (!error) {
            this.hideError(
              "signInPage.errorPassword",
              getEventName(SIGNIN_PAGE_EVENT_NAME, "errorPassword")
            );
          } else {
            this.showError(
              "signInPage.errorPassword",
              getEventName(SIGNIN_PAGE_EVENT_NAME, "errorPassword"),
              error,
              FieldName.Password
            );
          }
        },
      },
    ],
    submit: [
      {
        id: "form",
        fn: (event) => {
          event.preventDefault();
          const isFormValid = this.validateFormItems(
            event,
            "signInPage",
            SIGNIN_PAGE_EVENT_NAME
          );

          if (!isFormValid) {
            return;
          }

          const formData = this.handleFormService.handleFormSubmit(event);

          if (!formData) {
            return;
          }

          UserSignInController.signIn(formData);
        },
      },
    ],
  };
}

export const { signinEvents } = new SignInService();
