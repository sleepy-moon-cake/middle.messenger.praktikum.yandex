import formStyles from "./form.scss";
import template from "./form.hbs";
import Handlebars from "handlebars";
import {
    registerInput,
    registerButton
} from '../index'



export const registerForm = (name, options) => {
    const {
        inputElements,
        buttonElement
    } = options;

    if (inputElements) {
        inputElements.forEach(inputElement => {
            registerInput(inputElement.name, inputElement.params)
        });
    }

    if (buttonElement) {
        registerButton(buttonElement.name, buttonElement.params)
    }

    Handlebars.registerPartial(name, template(options))
}