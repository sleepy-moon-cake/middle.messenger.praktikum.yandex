import { Props } from "../../core/types";
import { ButtonProps } from "../button/types";
import { UsersListProps } from "../found-users/types";
import { SearchInputProps, TextInputProps } from "../inputs/types-input";

interface PopupBase extends Props {
  isOpened: boolean;
}

export interface PopupAddUserProps extends PopupBase {
  searchUserInput: SearchInputProps;
  usersList: UsersListProps;
}
export interface PopupAvatarProps extends PopupBase {
  defaultImgSrc: string;
  avatarImgSrc: string | null;
  avatarBlobImgSrc: string | null;
  changeAvatarButton: ButtonProps;
}

export interface PopupCreateChatProps extends PopupBase {
  defaultChatAvatarSrc: string;
  chatAvatarSrc: string | null;
  nameChatInput: TextInputProps;
  createChatButton: ButtonProps;
}

export interface PopupDeleteUserProps extends PopupBase {
  usersList: UsersListProps;
}
