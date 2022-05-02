import loginStyles from './login.scss';
import template from './login.hbs';
import {
    registerForm
} from '../../components';


const authorizationFormParams = {
    description: 'Вход',
    inputElements: [{
        class: 'input',
        type: 'text',
        placeholder: 'Логин'

    }, {
        class: 'input',
        type: 'password',
        placeholder: 'Пароль'

    }],
    buttonElement: {
        content: 'Авторизоваться',
        class: 'button'
    },
    linkElement: {
        content: 'Нет аккаунта?',
        href: '#'
    }
}

registerForm('authorizationForm')

export const loginPageHTML = () => {
    return template(authorizationFormParams);
}