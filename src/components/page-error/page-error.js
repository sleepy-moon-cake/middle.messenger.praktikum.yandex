import pageErrorStyles from './page-error.scss';
import template from './page-error.hbs';
import Handlebars from 'handlebars';
import {
    registerLink
} from '../link/link';



export const registerPageError = (name, options) => {
    registerLink('linkPageError')

    Handlebars.registerPartial(name, template(options))
}