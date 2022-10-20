import { Options } from "../services/http-service";

export abstract class BaseAPI {
  create(options: Options, ...rest: unknown[]): Promise<unknown> {
    throw new Error("Must be overwritten by ancestor");
  }

  get(options: Options, ...rest: unknown[]): Promise<unknown> {
    throw new Error("Must be overwritten by ancestor");
  }

  update(options: Options, ...rest: unknown[]): Promise<unknown> {
    throw new Error("Must be overwritten by ancestor");
  }

  delete(options: Options, ...rest: unknown[]): Promise<unknown> {
    throw new Error("Must be overwritten by ancestor");
  }
}
