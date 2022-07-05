import { Errors } from "../../models/enums/errors";
import { Events } from "../../models/enums/events";
import { NoopCallback } from "../../models/types/noop-callback";

export class EventBus {
  private listeners: Map<Events, NoopCallback<void>[]> = new Map();

  public subscribe(event: Events, callback: NoopCallback<void>): void {
    const register = this.listeners.get(event);

    if (register) {
      register.push(callback);
    }

    this.listeners.set(event, [callback]);
  }

  public unsubscribe(event: Events, callback: NoopCallback<void>): void | never {
    let register = this.listeners.get(event);

    if (register) {
      register = register.filter((registeredCallback) => registeredCallback !== callback);
    } else {
      throw new Error(Errors.EVENT_IS_NOT_REGISTERED);
    }
  }

  public emit(event: Events, ...args: unknown[]) {
    const register = this.listeners.get(event);

    if (register) {
      register.forEach((callback) => callback(...args));
    } else {
      throw new Error(Errors.EVENT_IS_NOT_REGISTERED);
    }
  }
}
