import { isObject } from "../../utils";
import { Indexed } from "../types";

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (!isObject(object)) {
    return object;
  }

  const pathArray = path.split(".");

  pathArray.reduce((acc: Indexed, key: string, idx: number) => {
    if (idx === pathArray.length - 1) {
      acc[key] = value;
    }

    if (acc[key] === undefined) {
      acc[key] = {};
    }

    return acc[key] as Indexed;
  }, object as Indexed);

  return object;
}
