import { Link } from "../../../components/link/link";
import { ResponseCode } from "../../../components/response-code/response-code";
import { Code } from "../code";

const responseCode = new ResponseCode({
  code: "500",
  text: "Мы уже фиксим",
  link: new Link({ content: "Назад к чатам", href: "#" }),
});

export const unavailablePage = new Code({ responseCode });
