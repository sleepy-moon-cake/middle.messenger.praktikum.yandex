import loginStyles from './login.scss';
import template from './login.hbs';
import {
    registerForm
} from '../../components';

const authorizationFormParams = {
    name: 'authorizationForm',
    params: {
        description: 'Вход',
        inputElements: [{
            name: 'inputLogin',
            params: {
                class: 'input',
                type: 'text',
                placeholder: 'Логин'
            }

        }, {
            name: 'inputPassword',
            params: {
                class: 'input',
                type: 'password',
                placeholder: 'Пароль'
            }

        }],
        buttonElement: {
            name: 'buttonSubmit',
            params: {
                content: 'Авторизоваться',
                class: 'button'
            }
        }
    },
}

registerForm(authorizationFormParams.name, authorizationFormParams.params)


export const login = template;