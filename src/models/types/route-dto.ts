import { ComponentClass } from "../../core/component/component";
import { Routes } from "../enums/routes";
import { NoopCallback } from "./noop-callback";

export type RoutesDTO = Array<RouteDTO>;

export type RouteDTO = {
  path: Routes;
  page: ComponentClass<any>;
  resolver?: NoopCallback<boolean>;
};
