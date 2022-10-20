import { SignUpAPI, SignUpResponse } from "../../api/auth/signup-api";
import { ErrorResponse } from "../../api/types";
import { router } from "../../index";
import { Options, ResponseType } from "../../services/http-service";

const validationKeys = [
  "first_name",
  "second_name",
  "login",
  "email",
  "phone",
  "password",
];

type SignUpFormModel = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  password: string;
};

const signUpAPI = new SignUpAPI();

export class UserSignUpController {
  static async signUp(data: any): Promise<void> {
    try {
      const isValid = userLoginValidator(data);

      if (!isValid) {
        throw new Error(
          "SignUp form data  does not correspond to Sign Up Form Model type"
        );
      }

      signUpAPI
        .create(prepareDataToRequest(data))
        .then((response: SignUpResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          router.go("/messenger");
        })
        .catch((error) => {
          console.error(error, data);
        });
    } catch (error) {
      console.error(error, data);
    }
  }
}

function isErrorResponse(response: any): response is ErrorResponse {
  return !!response?.reason;
}

function userLoginValidator(data: any): data is SignUpFormModel {
  const keysArray = Object.keys(data);

  return validationKeys.every((key: string) => keysArray.includes(key));
}

function prepareDataToRequest(data: SignUpFormModel): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };
}
