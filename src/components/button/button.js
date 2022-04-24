import buttonStyles from "./button.scss";
import template from "./button.hbs";
import Handlebars from "handlebars";

export const registerButton = (name) => {
    Handlebars.registerPartial(name, template)
}