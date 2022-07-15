import { getValueByPath } from "../../utils/get-value-by-path";
import { EventBus } from "../event-bus/event-bus";

export type Dispatch<State> = (
  nextStateOrAction: Partial<State> | Action<State>,
  payload?: any
) => void;

export type Action<State> = (
  dispatch: Dispatch<State>,
  payload: any,
  state: State
) => void;

export class Store<State extends Record<string, any>> extends EventBus {
  private state: State = {} as State;

  constructor(state: State) {
    super();
    this.state = state;
  }

  public static create<State extends Record<string, any>>(state?: State): Store<State> {
    return new Store(state ?? ({} as State));
  }

  public getState(path?: string) {
    if (path) {
      return getValueByPath(this.state, path);
    }

    return this.state;
  }

  public set(nextState: Partial<State>) {
    const prevState = { ...this.state };

    this.state = { ...this.state, ...nextState };

    this.emit("changed", prevState, nextState);
  }

  dispatch(nextStateOrAction: Partial<State> | Action<State>, payload?: any) {
    if (typeof nextStateOrAction === "function") {
      nextStateOrAction(this.dispatch.bind(this), payload, this.state);
    } else {
      this.set({ ...this.state, ...nextStateOrAction });
    }
  }
}
