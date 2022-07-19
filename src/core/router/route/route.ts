import { NoopCallback } from "../../../models/types/noop-callback";
import { render } from "../../../utils/renderDOM.utils";
import { ComponentClass, Component } from "../../component/component";

export class Route {
  private __pathname: string;
  private __view: ComponentClass<any>;
  private __block: Component | null = null;
  public resolver: NoopCallback<boolean> | undefined;

  constructor(
    pathname: string,
    view: ComponentClass<any>,
    resolver?: NoopCallback<boolean> | undefined
  ) {
    this.__pathname = pathname;
    this.__view = view;
    this.resolver = resolver;
  }

  public leave() {
    this.__block?.hide();
  }

  public match(pathname: string) {
    return this.__pathname === pathname;
  }

  public render() {
    if (!this.__block) {
      this.__block = new this.__view({});
      render(this.__block);
      return;
    }

    this.__block.show();
  }
}
