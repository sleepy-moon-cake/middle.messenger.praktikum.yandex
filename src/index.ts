import { loginPage } from "./pages/authentication/login/login";
import { signinPage } from "./pages/authentication/signin/signin";
import { chartsPage } from "./pages/chat/chats";
import { notFoundPage } from "./pages/codes/not-found/not-found";
import { unavailablePage } from "./pages/codes/unavailable/unavailable";
import { editPasswordPage } from "./pages/profile/edit-profile/edit-password/edit-password";
import { editProfilePage } from "./pages/profile/edit-profile/edit-profile";
import { profilePage } from "./pages/profile/profile";

const routes = {
  "/": loginPage,
  "/login": loginPage,
  "/signin": signinPage,
  "/chats": chartsPage,
  "/404": notFoundPage,
  "/500": unavailablePage,
  "/profile": profilePage,
  "/edit-profile": editProfilePage,
  "/edit-password": editPasswordPage,
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

function router(event: Event) {
  const pahtname: string = window.location.pathname;
  const page: any = routes[pahtname];

  if (page) {
    render(page);
  } else {
    render(routes["/404"]);
  }
}

function render(block: any, query: any = "root") {
  const root = document.getElementById(query);
  root?.appendChild(block.getElement());

  block.dispatchComponentDidMount();

  return root;
}
