import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { SIGNIN_INITIAL_STATE } from "../../store/initialState/signin-initial-state";
import { SIGNIN_PAGE_EVENT_NAME } from "./events";
import { signinEvents } from "./signin-service";
import templatePug from "./signin.pug";
import "./signin.scss";
import { SignInPageProps } from "./types";

export class SignInPage extends Block<SignInPageProps> {
  constructor(
    propsObj: SignInPageProps = SIGNIN_INITIAL_STATE,
    events: Events = signinEvents,
    rootId?: string
  ) {
    super("main", "signin-page-block", propsObj, events, rootId);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      SIGNIN_PAGE_EVENT_NAME,
      this._meta.events
    );
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || "app");

    root?.appendChild(this.getContent());
  }
}
