import formStyles from "./form.scss";
import template from "./form.hbs";
import Handlebars from "handlebars";
import {
    registerInput,
    registerButton,
    registerLink
} from '../index'

export const registerFormComponent = (name, option) => {
    registerInput('inputPartial');

    registerButton('buttonPartial');

    registerLink('linkPartial');

    Handlebars.registerPartial(name, template(option));
}