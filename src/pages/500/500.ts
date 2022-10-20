import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { router } from "../../index";
import { PAGE_500_INITIAL_STATE } from "../../store/initialState/500-initial-state";
import templatePug from "./500.pug";
import "./500.scss";
import { Page500Props } from "./types";

const page500Events: Events = {
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

export class Page500 extends Block<Page500Props> {
  constructor(
    propsObj: Page500Props = PAGE_500_INITIAL_STATE,
    events: Events = page500Events,
    rootId?: string
  ) {
    super("main", "page-500-block", propsObj, events, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || "app");

    root?.appendChild(this.getContent());
  }
}
