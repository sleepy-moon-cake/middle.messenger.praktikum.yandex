import { Block } from "../../core/block";
import { Events, Props } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { mapStateToPropsCallBack } from "../../store/utils";
import { FoundUserProps } from "../found-user/types";
import templatePug from "./users-list.pug";

export interface UsersListProps extends Props {
  users: FoundUserProps[] | [];
}

export class UsersList extends Block<UsersListProps> {
  constructor(propsObj: UsersListProps, eventName: string, events?: Events) {
    super("div", "users-list", propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      "usersList",
      this._meta.events
    );
  }
}
