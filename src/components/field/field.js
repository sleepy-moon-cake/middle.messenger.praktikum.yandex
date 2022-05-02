import profileStyles from './field.scss';
import template from './field.hbs';
import Handlebars from 'handlebars';

export const registerField = (name) => {
    Handlebars.registerPartial(name, template)
}