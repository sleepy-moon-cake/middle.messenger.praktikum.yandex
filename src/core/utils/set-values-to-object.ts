import { isObject } from "../../utils";

export function set(
  object: Record<any, any> | unknown,
  path: string,
  value: unknown
): Record<any, any> | unknown {
  if (!isObject(object)) {
    return object;
  }

  const pathArray = path.split(".");

  pathArray.reduce((acc: Record<any, any>, key: string, idx: number) => {
    if (idx === pathArray.length - 1) {
      acc[key] = value;
    }

    if (acc[key] === undefined) {
      acc[key] = {};
    }

    return acc[key] as Record<any, any>;
  }, object as Record<any, any>);

  return object;
}
