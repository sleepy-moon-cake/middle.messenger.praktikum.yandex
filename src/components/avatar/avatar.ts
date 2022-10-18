import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../store/utils";
import templatePug from "./avatar.pug";
import "./avatar.scss";
import { AvatarProps } from "./types";

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps, eventName: string, events?: Events) {
    super("div", "avatar-block", props, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
