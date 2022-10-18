import { Props } from "../../core/types";

export interface ButtonProps extends Props {
  type?: string;
  text?: string;
  addClass?: string;
  isDisabled?: boolean;
}
