import { Router } from "./core/router/router";
import { RoutesDTO } from "./models/types/route-dto";
import {
  signinPage,
  signupPage,
  chartsPage,
  notFoundPage,
  unavailablePage,
  profilePage,
  editProfilePage,
  editPasswordPage,
} from "./pages";

const routes: RoutesDTO = [
  {
    path: "/",
    page: signinPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (isAuthenticated) {
        window.router.go("/chats");
      }
      return !isAuthenticated;
    },
  },
  {
    path: "/signin",
    page: signinPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (isAuthenticated) {
        window.router.go("/chats");
      }
      return !isAuthenticated;
    },
  },
  { path: "/signup", page: signupPage },
  {
    path: "/chats",
    page: chartsPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (!isAuthenticated) {
        window.router.go("/");
      }
      return isAuthenticated;
    },
  },
  { path: "/404", page: notFoundPage },
  { path: "/500", page: unavailablePage },
  { path: "/profile", page: profilePage },
  {
    path: "/edit-profile",
    page: editProfilePage,
  },
  {
    path: "/edit-password",
    page: editPasswordPage,
  },
];

export function initRouter(router: Router) {
  routes.forEach((route) => router.use(route));
}
