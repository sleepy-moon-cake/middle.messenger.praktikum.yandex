import { RouteDTO } from "../../models/types/route-dto";
import { Route } from "./route/route";

export class Router {
  static __instance: Router | null = null;

  private history: History = window.history;

  private routes: Array<Route> = [];

  private _currentRoute: any | null = null;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }
    Router.__instance = this;
  }

  public static create(): Router {
    if (!Router.__instance) {
      Router.__instance = new Router();
    }

    return Router.__instance;
  }

  public use({ path, page, resolver = () => true }: RouteDTO): Router {
    const route = new Route(path, page, resolver);

    this.routes.push(route);

    return this;
  }

  public start(): void {
    window.onpopstate = (event: any) => {
      this.__onRouteChange(event?.currentTarget?.location.pathname);
    };

    this.__onRouteChange(window.location.pathname);
  }

  public go(pathname: string): void {
    this.history.pushState({}, "", pathname);
    this.__onRouteChange(pathname);
  }

  public back(): void {
    this.history.back();
  }

  public forward(): void {
    this.history.forward();
  }

  private getRoute(path: string) {
    return this.routes.find((route) => route.match(path));
  }

  private __onRouteChange(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) return;

    if (route.resolver()) {
      this._currentRoute?.leave();

      route.render();

      this._currentRoute = route;
    }
  }
}

export const router = new Router();
