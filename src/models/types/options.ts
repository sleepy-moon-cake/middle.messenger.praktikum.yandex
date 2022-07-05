import { Component } from "../../core/component/component";
import { Properties } from "./properties";
import { SimpleObject } from "./simple-object";

export type Options = Properties & {
  childern?: SimpleObject<Component>;
};
