import { NoopCallback } from "../../../models/types/noop-callback";
import { render } from "../../../utils/renderDOM.utils";
import { ComponentClass } from "../../component/component";

export class Route {
  private __pathname: string;
  private __view: InstanceType<ComponentClass>;
  private __block: InstanceType<ComponentClass> | null = null;
  public resolver: NoopCallback<boolean>;

  constructor(
    pathname: string,
    view: InstanceType<ComponentClass>,
    resolver: NoopCallback<boolean>
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
      this.__block = this.__view;
      render(this.__block);
      return;
    }

    this.__block.show();
  }
}
