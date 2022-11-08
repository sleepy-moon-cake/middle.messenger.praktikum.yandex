import { Route } from "./route";

export class Router {
  private static __instance: Router;
  private _currentRoute!: Route | null;
  private _rootQuery!: string;
  private _fallBackPathName!: string;

  private _routes!: Route[];
  private _history!: History;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._routes = [];
    this._history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: any) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this._routes.push(route);
    return this;
  }

  setFallBack(pathname: string, block: any) {
    this.use(pathname, block);
    this._fallBackPathName = pathname;
    return this;
  }

  start() {
    window.onpopstate = (event: any) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname) || this.getRoute(this._fallBackPathName);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string) {
    this._history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this._history.back();
  }

  forward() {
    this._history.forward();
  }

  getRoute(pathname: string) {
    return this._routes.find((route) => route.match(pathname));
  }
}
