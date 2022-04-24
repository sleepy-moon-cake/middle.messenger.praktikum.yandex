import linkStyles from './link.scss';
import template from './link.hbs';
import Handlebars from 'handlebars';

export const registerLink = (name) => {
    Handlebars.registerPartial(name, template);
}