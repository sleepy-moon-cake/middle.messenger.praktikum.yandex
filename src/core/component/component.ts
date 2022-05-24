import { Events } from "../../models/enums/events";
import { Options } from "../../models/types/options";
import { Properties } from "../../models/types/properties";
import { SimpleObject } from "../../models/types/simple-object";
import { EventBus } from "../event-bus/event-bus";
import { v4 as makeUUID } from "uuid";

export class Component {
  protected _id: string | null = null;
  private _element: HTMLElement;
  protected _props: Properties;
  private _children: SimpleObject<Component>;
  private _isDirty: boolean = false;
  protected eventBus: EventBus = new EventBus();

  constructor(private options: Options, private tagName: string = "div") {
    const { children = {}, props } = this._getChildrenAndProps(this.options);
    this._id = makeUUID();
    this._props = this._makeProxy(props);
    this._children = this._makeProxy(children);
    this._element = this._createElement(this.tagName);

    this._registerEvent();
    this.eventBus.emit(Events.INIT);
  }

  public getComponentId(): any {
    return this._id ?? null;
  }

  public getElement(): HTMLElement {
    return this._element;
  }

  public componentDidMount() {
    // can be overridden in descendants
  }

  public setOptions(paramets: Options) {
    const { children, props } = this._getChildrenAndProps(paramets);

    this._isDirty = false;

    if (props && this._props) {
      Object.assign(this._props, props);

      if (this._isDirty) {
        this.eventBus.emit(Events.FLOW_RENDER);
      }
    }
  }

  public isValueChanged(previousValue: any, currentValue: any): boolean {
    return previousValue !== currentValue;
  }

  public dispatchComponentDidMount() {
    this.eventBus.emit(Events.FLOW_CDM);
  }

  public render(): any {
    // used in descendants
  }

  protected compile(template: HandlebarsTemplateDelegate, props: SimpleObject) {
    const templateElement = this._createElement("template") as HTMLTemplateElement;
    const copyProps = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      copyProps[key] = `<div data-id="${child.getComponentId()}"></div>`;
    });

    templateElement.innerHTML = template(copyProps);

    Object.values(this._children).forEach((child) => {
      const childElement = templateElement.content.querySelector(
        `[data-id="${child.getComponentId()}"]`
      );
      childElement?.replaceWith(child.getElement());
    });

    return templateElement.content;
  }

  private _init(): void {
    this.eventBus.emit(Events.FLOW_RENDER);
  }

  private _createElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _makeProxy<T>(parametrs: SimpleObject<T>) {
    const handler: ProxyHandler<SimpleObject<T>> = {
      get(target, property: any) {
        const value: any = target[property];

        return typeof value === "function" ? value.bind(target) : value;
      },

      set: (target, property: Partial<string>, value, receiver): boolean => {
        let targetValue = target[property];

        if (!this._isDirty) {
          this._valueChange(target[property], value);
        }

        targetValue = value;
        return Reflect.set(target, property, value, receiver);
      },
    };

    return new Proxy(parametrs, handler);
  }

  private _getChildrenAndProps(options: Options) {
    const children: SimpleObject<Component> = {};
    const props: Properties = {};
    const childrenArray = [];

    Object.entries(options).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _valueChange(previousValue: any, currentValue: any) {
    if (this.isValueChanged(previousValue, currentValue)) {
      this._isDirty = true;
    }
  }

  private _registerEvent() {
    this.eventBus.subscribe(Events.INIT, this._init.bind(this));
    this.eventBus.subscribe(Events.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.subscribe(Events.FLOW_RENDER, this._render.bind(this));
  }

  private _render() {
    const block = this.render();

    this._removeLiseners();
    this._element.innerHTML = "";
    this._element.append(block);
    this._addListeners();
  }

  private _addListeners() {
    const { listeners } = this._props;

    if (listeners?.length) {
      listeners.forEach((listener) => {
        Object.entries(listener).forEach(([event, callBack]) => {
          this.getElement().addEventListener(event, callBack);
        });
      });
    }
  }

  private _removeLiseners() {
    const { listeners } = this._props;

    if (listeners?.length) {
      listeners.forEach((listener) => {
        Object.entries(listener).forEach(([event, callBack]) => {
          this.getElement().removeEventListener(event, callBack);
        });
      });
    }
  }

  public _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this._children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }
}
