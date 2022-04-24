import notFoundStyles from "./not-found.scss";
import template from "./not-found.hbs";
import {
    registerPageError
} from "../../../components";

const pageErrorParams = {
    code: '404',
    text: 'Не туда попали',
    linkElement: {
        content: 'Назад к чатам',
        href: '#'
    }
}
export const notFoundPageHTML = () => {
    registerPageError('not-found-page-error', pageErrorParams)

    return template();
}