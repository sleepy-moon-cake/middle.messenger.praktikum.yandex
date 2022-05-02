import { registerPageError } from "../../../components";
import template from "./not-found.hbs";
import notFoundStyles from "./not-found.scss";

const pageErrorParams = {
  code: "404",
  text: "Не туда попали",
  linkElement: {
    content: "Назад к чатам",
    href: "#",
  },
};
export const notFoundPageHTML = () => {
  registerPageError("not-found-page-error", pageErrorParams);

  return template();
};
