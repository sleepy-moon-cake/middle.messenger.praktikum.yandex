import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

export type SignUpResponse = {
  id: number;
};

const signUpAPIInstance = new Http(`${HOST}/api/v2/auth/signup`);

export class SignUpAPI extends BaseAPI {
  public create(options: Options): Promise<SignUpResponse | ErrorResponse> {
    return signUpAPIInstance
      .post<SignUpResponse | ErrorResponse>("", options)
      .then((data) => data);
  }
}
