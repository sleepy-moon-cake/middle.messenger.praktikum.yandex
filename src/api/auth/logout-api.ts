import { HOST } from "../../constants";
import { Http, Options } from "../../services/http-service";
import { BaseAPI } from "../base-api";
import { ErrorResponse } from "../types";

const logOutAPIInstance = new Http(`${HOST}/api/v2/auth/logout`);

export class LogoutAPI extends BaseAPI {
  public create(options: Options): Promise<ErrorResponse | null> {
    return logOutAPIInstance.post<ErrorResponse | null>("", options).then((data) => data);
  }
}
