import template from "./button.hbs";
import buttonStyles from "./button.scss";
import Handlebars from "handlebars";

export const registerButton = (name) => {
  Handlebars.registerPartial(name, template);
};
