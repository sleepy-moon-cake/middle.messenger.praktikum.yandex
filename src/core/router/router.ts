import { ComponentClass } from "../component/component";
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

  public use(path: string, component: InstanceType<ComponentClass>): Router {
    const route = new Route(path, component);

    this.routes.push(route);

    return this;
  }

  public start(): void {
    window.onpopstate = (event: any) => {
      this._onRoute(event?.currentTarget?.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string): void {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
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

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) return;

    this._currentRoute?.leave();

    route.render();

    this._currentRoute = route;
  }
}

export const router = new Router();
