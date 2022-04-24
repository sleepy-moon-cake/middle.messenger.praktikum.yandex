import template from './signin.hbs';
import {
    registerFormComponent
} from '../../components';

const registerationFormParams = {
    description: 'Регистрация',
    inputElements: [{
            class: 'input',
            type: 'email',
            placeholder: 'Почта'

        },
        {
            class: 'input',
            type: 'text',
            placeholder: 'Логин'

        },
        {
            class: 'input',
            type: 'text',
            placeholder: 'Фамилия'

        },
        {
            class: 'input',
            type: 'tel',
            placeholder: 'Телефон'

        },
        {
            class: 'input',
            type: 'password',
            placeholder: 'Пароль'
        }, {
            class: 'input',
            type: 'password',
            placeholder: 'Пароль(еще раз)'
        }
    ],


    buttonElement: {
        content: 'Зарегистрироваться',
        class: 'button'
    },
    linkElement: {
        content: 'Войти',
        href: '#'
    }
}

registerFormComponent('registerationForm', registerationFormParams)


export const signinHTML = () => {
    return template();
}