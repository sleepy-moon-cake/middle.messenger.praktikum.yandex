import { ComponentClass } from "./core/component/component";
import { Router } from "./core/router/router";
import { loginPage } from "./pages/authentication/login/login";
import { signinPage } from "./pages/authentication/signin/signin";
import { chartsPage } from "./pages/chats/chats";
import { notFoundPage } from "./pages/codes/not-found/not-found";
import { unavailablePage } from "./pages/codes/unavailable/unavailable";
import { editPasswordPage } from "./pages/profile/edit-profile/edit-password/edit-password";
import { editProfilePage } from "./pages/profile/edit-profile/edit-profile";
import { profilePage } from "./pages/profile/profile";

const routes: Array<{ pathname: string; page: InstanceType<ComponentClass> }> = [
  { pathname: "/", page: loginPage },
  { pathname: "/login", page: loginPage },
  { pathname: "/signin", page: signinPage },
  { pathname: "/chats", page: chartsPage },
  { pathname: "/404", page: notFoundPage },
  { pathname: "/500", page: unavailablePage },
  { pathname: "/profile", page: profilePage },
  { pathname: "/edit-profile", page: editProfilePage },
  { pathname: "/edit-password", page: editPasswordPage },
];

window.addEventListener("DOMContentLoaded", () => {
  const router = new Router();
  routes.forEach((route) => {
    router.use(route.pathname, route.page);
  });

  router.start();
});
