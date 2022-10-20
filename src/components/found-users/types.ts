import { Props } from "../../core/types";
import { FoundUserProps } from "../found-user/types";

export interface UsersListProps extends Props {
  users: FoundUserProps[] | [];
}
