import { ComponentClass } from "../../core/component/component";
import { NoopCallback } from "./noop-callback";

export type RoutesDTO = Array<RouteDTO>;

export type RouteDTO = {
  path: string;
  page: InstanceType<ComponentClass>;
  resolver?: NoopCallback<boolean>;
};
