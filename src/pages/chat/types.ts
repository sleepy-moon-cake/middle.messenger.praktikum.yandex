import { AvatarProps } from "../../components/avatar/avatar";
import { ChatsListProps } from "../../components/chat-list/chats-list";
import { ChatCardProps } from "../../components/chat/chat-card/chat-card";
import { ErrorMessageProps } from "../../components/error-message/error-message";
import { SearchInputProps } from "../../components/inputs/search/search-input";
import { EllipsisMenuProps } from "../../components/menus/ellipsis-menu/ellipsis-menu";
import { MessagesListProps } from "../../components/messages-list/messages-list";
import { PopupAddUserProps } from "../../components/popups/popup-add-user/popup-add-user";
import { PopupCreateChatProps } from "../../components/popups/popup-create-chat/popup-create-chat";
import { PopupDeleteUserProps } from "../../components/popups/popup-delete-user/popup-delete-user";
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
