import { Link } from "../../../components/link/link";
import { ResponseCode } from "../../../components/response-code/response-code";
import { Code } from "../code";

const responseCode = new ResponseCode({
  code: "404",
  text: "Не туда попали",
  link: new Link({ content: "Назад к чатам", href: "#" }),
});

export const notFoundPage = new Code({ responseCode });
