import { Block } from "../../../core/block";
import { Events, Props } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import templatePug from "./ellipsis-menu.pug";
import "./ellipsis-menu.scss";
import { EllipsisMenuProps } from "./types";

export class EllipsisMenu extends Block<EllipsisMenuProps> {
  constructor(propsObj: EllipsisMenuProps, eventName: string, events?: Events) {
    super("div", "ellipsis-menu", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "ellipsisMenu",
      this._meta.events
    );
  }
}
