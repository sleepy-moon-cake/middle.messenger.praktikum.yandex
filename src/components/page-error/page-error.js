import { registerLink } from "../link/link";
import template from "./page-error.hbs";
import pageErrorStyles from "./page-error.scss";
import Handlebars from "handlebars";

export const registerPageError = (name, options) => {
  registerLink("linkPageError");

  Handlebars.registerPartial(name, template(options));
};
