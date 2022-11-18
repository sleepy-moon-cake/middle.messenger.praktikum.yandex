import { AvatarProps } from "../../components";
import { Props } from "../../core/types";

export enum UserActionIcon {
  Add = "add",
  Delete = "delete",
}

export interface FoundUserProps extends Props {
  id: number;
  fullName: string;
  avatar: AvatarProps;
  iconType: UserActionIcon;
  iconDisabled?: boolean;
}
