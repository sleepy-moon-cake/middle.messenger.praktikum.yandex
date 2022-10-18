import { Props } from "../../core/types";
import { AvatarProps } from "../avatar/types";
import { TimeProps } from "../time/types";

export interface ChatCardProps extends Props {
  chatName: string;
  textMessage?: string;
  unreadMessageCount?: number;
  avatar: AvatarProps;
  time: TimeProps | null;
  active: boolean;
  id: number;
}

export interface ChatsListProps extends Props {
  chats: ChatCardProps[] | [];
}
