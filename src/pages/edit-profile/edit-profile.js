import editProfileStyles from './edit-profile.scss';
import template from './edit-profile.hbs';
import {
    registerButton,
    registerField,
    registerInput
} from '../../components';


const profileParams = {
    imgElement: {},
    userName: "Иван",
    fields: [{
            key: 'Почта',
            inputElement: {
                value: 'pochta@yandex.ru',
                type: 'mail',
                class: 'edit-profile__input'
            }
        },
        {
            key: 'Логин',
            inputElement: {
                value: 'ivanivanov',
                type: 'text',
                class: 'edit-profile__input'
            }
        }, {
            key: 'Имя',
            inputElement: {
                value: 'Иван',
                type: 'text',
                class: 'edit-profile__input'
            }
        }, {
            key: 'Фамилия',
            inputElement: {
                value: 'Иванов',
                type: 'text',
                class: 'edit-profile__input'
            }
        }, {
            key: 'Имя в чате',
            inputElement: {
                value: 'Иван',
                type: 'text',
                class: 'edit-profile__input'
            }
        },
        {
            key: 'Телефон',
            inputElement: {
                value: '+7 (909) 967 30 30',
                type: 'tel',
                class: 'edit-profile__input'
            }
        }
    ],
    buttonElement: {
        type: 'submit',
        content: 'Сохранить',
        class: 'edit-profile__save-button'
    }

}



export const editProfilePageHTML = () => {
    registerButton('edit-profile-save-button')
    registerField('edit-profile-field')
    registerInput('edit-profile-input')
    // TODO: Use separate function to register necessary partials in order to avoid duplication


    return template(profileParams)
}