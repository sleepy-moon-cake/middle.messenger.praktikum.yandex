import {
  PopupAddUserProps,
  AvatarProps,
  ChatsListProps,
  ChatCardProps,
  ErrorMessageProps,
  SearchInputProps,
  EllipsisMenuProps,
  MessagesListProps,
  PopupCreateChatProps,
  PopupDeleteUserProps,
} from "../../components";
import { TimeProps } from "../../components/time/types";
import { Props } from "../../core/types";
import { FieldName } from "../../services/form-services/form-validation-service";

export interface ChatPageProps extends Props {
  chatName?: string | null;
  messageFieldName?: FieldName;
  settingsImgSrc?: string | null;
  vertEllipsisImgSrc?: string | null;
  cartImgSrc?: string | null;
  selectedChat: ChatCardProps | null;
  chatsList: ChatsListProps;
  error?: ErrorMessageProps;
  search?: SearchInputProps;
  chatAvatar?: AvatarProps;
  time: TimeProps | null;
  messagesList: MessagesListProps;
  ellipsisMenu: EllipsisMenuProps;
  popupCreateChat: PopupCreateChatProps;
  popupAddUserToChat: PopupAddUserProps;
  popupDeleteUserFromChat: PopupDeleteUserProps;
}
