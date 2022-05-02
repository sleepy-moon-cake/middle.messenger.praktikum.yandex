import template from "./link.hbs";
import linkStyles from "./link.scss";
import Handlebars from "handlebars";

export const registerLink = (name) => {
  Handlebars.registerPartial(name, template);
};
