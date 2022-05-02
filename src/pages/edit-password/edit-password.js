import { registerButton, registerField, registerInput } from "../../components";
import tempalte from "./edit-password.hbs";
import editPasswordStyles from "./edit-password.scss";

const editPasswordParams = {
  fields: [
    {
      key: "Старый пароль",
      inputElement: {
        type: "password",
        class: "edit-password__input",
        value: "1231241231",
      },
    },
    {
      key: "Новый пароль",
      inputElement: {
        type: "password",
        class: "edit-password__input",
        value: "1231241231",
      },
    },
    {
      key: "Повторите новый пароль",
      inputElement: {
        type: "password",
        class: "edit-password__input",
        value: "1231241231",
      },
    },
  ],
  buttonElement: {
    type: "submit",
    content: "Сохранить",
    class: "edit-password__save-button",
  },
};

export const editPasswordPageHTML = () => {
  registerButton("edit-password-save-button");
  registerField("edit-password-field");
  registerInput("edit-password-input");
  // TODO: Use separate function to register necessary partials in order to avoid duplication

  return tempalte(editPasswordParams);
};
