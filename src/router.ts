import { Router } from "./core/router/router";
import { Routes } from "./models/enums/routes";
import { RoutesDTO } from "./models/types/route-dto";
import {
  SigninPage,
  SignupPage,
  ChatsPage,
  NotFoundPage,
  UnavailablePage,
  EditPassordPage,
  EditProfilePage,
  ProfilePage,
} from "./pages";

const routes: RoutesDTO = [
  {
    path: Routes.ROOT,
    page: SigninPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (isAuthenticated) {
        window.router.go(Routes.CHATS);
      }
      return !isAuthenticated;
    },
  },
  {
    path: Routes.SIGNIN,
    page: SigninPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (isAuthenticated) {
        window.router.go(Routes.CHATS);
      }
      return !isAuthenticated;
    },
  },
  { path: Routes.SIGNUP, page: SignupPage },
  {
    path: Routes.CHATS,
    page: ChatsPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (!isAuthenticated) {
        window.router.go(Routes.ROOT);
      }
      return isAuthenticated;
    },
  },

  {
    path: Routes.CHATS_ID,
    page: ChatsPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (!isAuthenticated) {
        window.router.go(Routes.ROOT);
      }
      return isAuthenticated;
    },
  },
  { path: Routes.NOT_FOUND, page: UnavailablePage },
  { path: Routes.UNAVALIABLE, page: NotFoundPage },
  {
    path: Routes.PROFILE,
    page: ProfilePage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (!isAuthenticated) {
        window.router.go(Routes.ROOT);
      }
      return isAuthenticated;
    },
  },
  {
    path: Routes.EDIT_PROFILE,
    page: EditProfilePage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (!isAuthenticated) {
        window.router.go(Routes.ROOT);
      }
      return isAuthenticated;
    },
  },
  {
    path: Routes.EDIT_PASSWORD,
    page: EditPassordPage,
    resolver: function () {
      const isAuthenticated = window.appStore.getState("isAuthenticated") as boolean;

      if (!isAuthenticated) {
        window.router.go(Routes.ROOT);
      }
      return isAuthenticated;
    },
  },
];

export function initRouter(router: Router) {
  routes.forEach((route) => router.use(route));
}
