import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { router } from "../../index";
import { PAGE_404_INITIAL_STATE } from "../../store/initialState/400-initial-state";
import templatePug from "./404.pug";
import "./404.scss";
import { Page404Props } from "./types";

const page404Events: Events = {
  click: [
    {
      id: "goToChat",
      fn: (event) => {
        event.preventDefault();
        router.go("/messenger");
      },
    },
  ],
};

export class Page404 extends Block<Page404Props> {
  constructor(
    propsObj: Page404Props = PAGE_404_INITIAL_STATE,
    events: Events = page404Events,
    rootId?: string
  ) {
    super("main", "page-404-block", propsObj, events, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || "app");

    root?.appendChild(this.getContent());
  }
}
