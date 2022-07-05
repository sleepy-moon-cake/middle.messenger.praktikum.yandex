import { guardElement } from "./guard-element.util";

export function markAsDitry(event: Event) {
  const target = event.target as NonNullable<EventTarget | null>;

  if (guardElement(target) && target.classList.contains("dirty")) {
    target.classList.add("dirty");
  }
}
