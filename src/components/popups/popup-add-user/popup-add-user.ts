import { Block } from "../../../core/block";
import { Events, Props } from "../../../core/types";
import { compileTemplateToElement } from "../../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../../store/utils";
import { UsersListProps } from "../../found-users/users-list";
import { SearchInputProps } from "../../inputs/search/search-input";
import templatePug from "./popup-add-user.pug";
import "./popup-add-user.scss";

export interface PopupAddUserProps extends Props {
  isOpened: boolean;
  searchUserInput: SearchInputProps;
  usersList: UsersListProps;
}

export class PopupAddUser extends Block<PopupAddUserProps> {
  constructor(propsObj: PopupAddUserProps, eventName: string, events?: Events) {
    super("div", "popup-add-user", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "popupAddUserToChat",
      this._meta.events
    );
  }
}
