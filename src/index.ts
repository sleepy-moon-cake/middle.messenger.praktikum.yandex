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

const router = Router.create();
const appStore = Store.create<AppState>({
  user: null,
  isAuthenticated: false,
  appIsInited: false,
});

window.addEventListener("DOMContentLoaded", () => {
  window.router = router;
  window.appStore = appStore;

  appStore.subscribe("changed", (prevState: AppState, nextState: AppState) => {
    if (!prevState.appIsInited && nextState.appIsInited) {
      router.start();
    }
  });

  initRouter(router);
  appStore.dispatch(initUser);
});
