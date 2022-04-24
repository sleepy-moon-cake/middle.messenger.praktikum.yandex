import unavailableStyles from "./unavailable.scss";
import template from "./unavailable.hbs";
import {
    registerPageError
} from "../../../components";

const pageErrorParams = {
    code: '500',
    text: 'Мы уже фиксим',
    linkElement: {
        content: 'Назад к чатам',
        href: '#'
    }
}

export const unavailablePageHTML = () => {
    registerPageError('unavailable-page-error', pageErrorParams)

    return template();
}