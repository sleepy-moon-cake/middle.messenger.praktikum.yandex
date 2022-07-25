import { NoopCallback } from "../../../models/types/noop-callback";
import { render } from "../../../utils/renderDOM.utils";
import { ComponentClass, Component } from "../../component/component";

export class Route {
  private __pathname: string;
  private __isPrefixId: boolean;
  private __view: ComponentClass<any>;
  private __block: Component | null = null;
  public resolver: NoopCallback<boolean> | undefined;

  constructor(
    pathname: string,
    view: ComponentClass<any>,
    resolver?: NoopCallback<boolean> | undefined
  ) {
    this.__pathname = pathname;
    this.__isPrefixId = pathname.includes(":id");
    this.__view = view;
    this.resolver = resolver;
  }

  public leave() {
    this.__block?.hide();
  }

  public match(pathname: string) {
    let routPathname = this.__pathname;

    if (this.__isPrefixId) {
      pathname = pathname.replace(/\/\d+/, "");
      routPathname = routPathname.replace("/:id", "");
    }

    return routPathname === pathname;
  }

  public render() {
    const id = window.location.pathname.replace(/[a-zA-z/]+/, "");
    const idPath = (id && Number(id)) || null;
    if (!this.__block) {
      this.__block = new this.__view({ idPath });
      render(this.__block);
      return;
    }

    this.__block.show();
  }
}
