import store from "./store";
import { State } from "./types";

export function mapStateToPropsCallBack(this: Record<any, any>, path: string): void {
  this.setProps(mapStateToProps(store.getState(), path));
}

function mapStateToProps(state: State, path: string) {
  const pathArray = path.split(".");

  return pathArray.reduce((acc: any, key: string) => acc[key], state);
}
