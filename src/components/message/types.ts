import { Props } from "../../core/types";
import { AvatarProps } from "../avatar/types";
import { TimeProps } from "../time/types";

export interface MessageProps extends Props {
  you: boolean;
  text: string;
  avatar: AvatarProps;
  time: TimeProps;
}

export interface MessagesListProps extends Props {
  messages: MessageProps[] | [];
}
