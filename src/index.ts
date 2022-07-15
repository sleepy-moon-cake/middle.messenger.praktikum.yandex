import { Router } from "./core/router/router";
import { Store } from "./core/store/store";
import { initRouter } from "./router";
import { initUser } from "./services/api/auth/auth-actions";
import { AppState } from "./services/api/types";

declare global {
  interface Window {
    appStore: Store<AppState>;
    router: Router;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const router = Router.create();
  const appStore = Store.create<AppState>();

  window.router = router;
  window.appStore = appStore;

  appStore.subscribe("changed", (p, c) => {
    debugger;
    console.log(p, c);
  });

  initRouter(router);
  appStore.dispatch(initUser);
});
