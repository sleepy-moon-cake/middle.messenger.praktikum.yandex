import profileStyles from './profile.scss';
import template from './profile.hbs';
import {
    registerField,
    registerLink
} from '../../components';

const profileParams = {
    imgElement: {},
    userName: "Иван",
    fields: [{
            key: 'Почта',
            value: 'pochta@yandex.ru'
        },
        {
            key: 'Логин',
            value: 'ivanivanov'
        }, {
            key: 'Имя',
            value: 'Иван'
        }, {
            key: 'Фамилия',
            value: 'Иванов'
        }, {
            key: 'Имя в чате',
            value: 'Иван'
        },
        {
            key: 'Телефон',
            value: '+7 (909) 967 30 30'
        }
    ],
    linkElements: [{
            content: 'Изменить данные',
            href: '#',
            class: 'profile__link'
        },
        {
            content: 'Изменить пароль',
            href: '#',
            class: 'profile__link'
        },
        {
            content: 'Выйти',
            href: '#',
            class: ' profile__link profile__link--exit'
        },
    ]
}

export const profilePageHTML = () => {
    registerField('profile-field')

    registerLink('profile-link');

    return template(profileParams);
}