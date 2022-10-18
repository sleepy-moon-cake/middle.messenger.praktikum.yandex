import { Avatar } from "../components/avatar/avatar";
import { ChatCard } from "../components/chat-card/chat-card";
import { ChatsList } from "../components/chat-list/chats-list";
import { ErrorMessage } from "../components/error-message/error-message";
import { FormButton } from "../components/form-button/form-button";
import { FoundUser } from "../components/found-user/found-user";
import { UsersList } from "../components/found-users/users-list";
import { EmailInput } from "../components/inputs/email/email-input";
import { PasswordInput } from "../components/inputs/password/password-input";
import { PhoneInput } from "../components/inputs/phone/phone-input";
import { SearchInput } from "../components/inputs/search/search-input";
import { TextInput } from "../components/inputs/text/text-input";
import { EllipsisMenu } from "../components/menus/ellipsis-menu/ellipsis-menu";
import { Message } from "../components/message/message";
import { MessagesList } from "../components/messages-list/messages-list";
import { PopupAddUser } from "../components/popups/popup-add-user/popup-add-user";
import { PopupAvatar } from "../components/popups/popup-avatar/popup-avatar";
import { PopupCreateChat } from "../components/popups/popup-create-chat/popup-create-chat";
import { PopupDeleteUser } from "../components/popups/popup-delete-user/popup-delete-user";
import { Time } from "../components/time/time";

export const REGISTERED_COMPONENTS = {
  TextInputComponent: TextInput,
  EmailInputComponent: EmailInput,
  PasswordInputComponent: PasswordInput,
  PhoneInputComponent: PhoneInput,
  SearchInputComponent: SearchInput,
  FormButtonComponent: FormButton,
  ErrorMessageComponent: ErrorMessage,
  ChatCardComponent: ChatCard,
  ChatsListComponent: ChatsList,
  AvatarComponent: Avatar,
  TimeComponent: Time,
  MessageComponent: Message,
  MessagesListComponent: MessagesList,
  PopupAvatarComponent: PopupAvatar,
  EllipsisMenu: EllipsisMenu,
  PopupCreateChatComponent: PopupCreateChat,
  PopupAddUserToChatComponent: PopupAddUser,
  PopupDeleteUserFromChatComponent: PopupDeleteUser,
  FoundUserComponent: FoundUser,
  UsersListComponent: UsersList,
};
