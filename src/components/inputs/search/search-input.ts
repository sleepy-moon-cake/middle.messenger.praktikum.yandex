import { Block } from "../../../core/block";
import { Events } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { SearchInputProps } from "../types-input";
import templatePug from "./search-input.pug";
import "./search-input.scss";

export class SearchInput extends Block<SearchInputProps> {
  constructor(propsObj: SearchInputProps, eventName: string, events?: Events) {
    super("div", "search-input-block", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, "", this._meta.events);
  }
}
