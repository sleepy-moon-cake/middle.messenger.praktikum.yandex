import inputStyles from "./input.scss";
import template from "./input.hbs";
import Handlebars from "handlebars";

export const registerInput =  (name, options) => {
    Handlebars.registerPartial(name, template(options))
}