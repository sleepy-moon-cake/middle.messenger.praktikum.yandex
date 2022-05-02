import template from "./input.hbs";
import inputStyles from "./input.scss";
import Handlebars from "handlebars";

export const registerInput = (name) => {
  Handlebars.registerPartial(name, template);
};
