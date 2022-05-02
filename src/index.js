import commonStyles from "../static/styles/common.scss";
import { editPasswordPageHTML } from "./pages/edit-password/edit-password";
import { editProfilePageHTML } from "./pages/edit-profile/edit-profile";
import { notFoundPageHTML } from "./pages/errors/not-found/not-found";
import { unavailablePageHTML } from "./pages/errors/unavailable/unavailable";
import { loginPageHTML } from "./pages/login/login";
import { profilePageHTML } from "./pages/profile/profile";
import { signinPageHTML } from "./pages/signin/signin";

const routes = {
  "/": loginPageHTML,
  "/login": loginPageHTML,
  "/signin": signinPageHTML,
  "/404": notFoundPageHTML,
  "/505": unavailablePageHTML,
  "/profile": profilePageHTML,
  "/edit-profile": editProfilePageHTML,
  "/edit-password": editPasswordPageHTML,
};
const root = document.getElementById("root");

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

function router(event) {
  const pahtname = window.location.pathname;
  const page = routes[pahtname];

  if (page) {
    renderPage(page);
  } else {
    renderPage(routes["/404"]);
  }
}

function renderPage(page) {
  root.innerHTML = page();
}
