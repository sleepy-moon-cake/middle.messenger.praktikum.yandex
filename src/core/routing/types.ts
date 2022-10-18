import { Block } from "../block";
import { Events, Props } from "../types";

export type RouteProps = {
  rootQuery: string;
};

export type BlockInheritor = new (
  propsObj: Props | undefined,
  events: Events | undefined,
  rootId?: string
) => InstanceType<typeof Block>;
