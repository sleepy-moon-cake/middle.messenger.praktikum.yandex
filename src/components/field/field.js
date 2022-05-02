import template from "./field.hbs";
import profileStyles from "./field.scss";
import Handlebars from "handlebars";

export const registerField = (name) => {
  Handlebars.registerPartial(name, template);
};
