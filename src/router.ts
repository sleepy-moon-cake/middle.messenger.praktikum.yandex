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
  { path: "/", page: signinPage },
  { path: "/signin", page: signinPage },
  { path: "/signup", page: signupPage },
  { path: "/chats", page: chartsPage, resolver: () => false },
  { path: "/404", page: notFoundPage },
  { path: "/500", page: unavailablePage },
  { path: "/profile", page: profilePage },
  { path: "/edit-profile", page: editProfilePage, resolver: () => false },
  { path: "/edit-password", page: editPasswordPage, resolver: () => false },
];

export function initRouter(router: Router) {
  routes.forEach((route) => router.use(route));

  router.start();
}
