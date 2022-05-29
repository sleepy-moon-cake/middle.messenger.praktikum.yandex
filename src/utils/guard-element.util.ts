export function guardElement(target: EventTarget): target is Element {
  return target instanceof Element;
}
