import { registerInput, registerButton, registerLink } from "../index";
import template from "./form.hbs";
import formStyles from "./form.scss";
import Handlebars from "handlebars";

export const registerForm = (name) => {
  registerInput("inputPartial");

  registerButton("buttonPartial");

  registerLink("linkPartial");
  Handlebars.registerPartial(name, template);
};
