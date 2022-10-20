import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

const signInAPIInstance = new Http(`${HOST}/api/v2/auth/signin`);

export class SignInAPI extends BaseAPI {
  public create(options: Options): Promise<ErrorResponse | null> {
    return signInAPIInstance.post<ErrorResponse | null>("", options).then((data) => data);
  }
}
