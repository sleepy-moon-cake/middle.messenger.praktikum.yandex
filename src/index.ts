import "../static/main.scss";
import { Router } from "./core/routing/router";
import { Page404 } from "./pages/404/404";
import { Page500 } from "./pages/500/500";
import { ChatPage } from "./pages/chat/chat";
import { SettingsPage } from "./pages/settings/settings";
import { SignInPage } from "./pages/signin/signin";
import { SignUpPage } from "./pages/signup/signup";

export const router = new Router("app");

router
  .use("/", SignInPage)
  .use("/sign-up", SignUpPage)
  .use("/settings", SettingsPage)
  .use("/messenger", ChatPage)
  .use("/500", Page500)
  .setFallBack("/404", Page404)
  .start();
