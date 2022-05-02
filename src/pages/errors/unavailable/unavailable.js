import { registerPageError } from "../../../components";
import template from "./unavailable.hbs";
import unavailableStyles from "./unavailable.scss";

const pageErrorParams = {
  code: "500",
  text: "Мы уже фиксим",
  linkElement: {
    content: "Назад к чатам",
    href: "#",
  },
};

export const unavailablePageHTML = () => {
  registerPageError("unavailable-page-error", pageErrorParams);

  return template();
};
