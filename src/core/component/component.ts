import { Events } from "../../models/enums/events";
import { EventBus } from "../event-bus/event-bus";
import Handlebars from "handlebars";
import { v4 as makeUUID } from "uuid";

export interface ComponentClass<P> extends Function {
  new (props: P): Component;
}

export abstract class Component<P = any> {
  public id = makeUUID();

  protected _element: HTMLElement | null = null;
  protected readonly props: P;
  protected children: { [id: string]: Component } = {};

  eventBus: EventBus = new EventBus();

  protected state: any = {};
  protected refs: { [key: string]: HTMLElement } = {};

  public constructor(props?: P) {
    this.getStateFromProps(props);

    this.props = this._makePropsProxy(props || ({} as P));
    this.state = this._makePropsProxy(this.state);

    this._registerEvents();

    this.eventBus.emit(Events.INIT, this.props);
  }

  _registerEvents() {
    this.eventBus.subscribe(Events.INIT, this.init.bind(this));
    this.eventBus.subscribe(Events.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.subscribe(Events.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.subscribe(Events.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement("div");
  }

  protected getStateFromProps(props: any): void {
    this.state = {};
  }

  init() {
    this._createResources();
    this.eventBus.emit(Events.FLOW_RENDER, this.props);
  }

  _componentDidMount(props: P) {
    this.componentDidMount(props);
  }

  componentDidMount(props: P) {}

  _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: P, newProps: P) {
    return JSON.stringify(oldProps) === JSON.stringify(newProps);
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  setState = (nextState: any) => {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  };

  get element() {
    return this._element;
  }

  getEventElement(): HTMLElement | null {
    return null;
  }

  _render() {
    const fragment = this._compile();

    this._removeEvents();
    const newElement = fragment.firstElementChild!;

    this._element!.replaceWith(newElement);

    this._element = newElement as HTMLElement;
    this._addEvents();
  }

  public render(): string {
    return "";
  }

  getContent(): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          this.eventBus.emit(Events.FLOW_CDM);
        }
      }, 100);
    }

    return this.element!;
  }

  _makePropsProxy(props: any): any {
    const self = this;

    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value;
        self.eventBus.emit(Events.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    }) as unknown as P;
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      const eventElement = this.getEventElement();

      if (eventElement) {
        eventElement.removeEventListener(event, listener);
      }
      this._element!.removeEventListener(event, listener);
    });
  }

  _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      const eventElement = this.getEventElement();

      if (eventElement) {
        eventElement.addEventListener(event, listener);
      }

      this._element!.addEventListener(event, listener);
    });
  }

  _compile(): DocumentFragment {
    const fragment = document.createElement("template");
    const template = Handlebars.compile(this.render());
    fragment.innerHTML = template({
      ...this.state,
      ...this.props,
      children: this.children,
      refs: this.refs,
    });
    
    Object.entries(this.children).forEach(([id, component]) => {
      const stub = fragment.content.querySelector(`[data-id="${id}"]`);

      if (!stub) {
        return;
      }

      const stubChilds: NodeListOf<ChildNode> | [] = stub.childNodes.length
        ? stub.childNodes
        : [];

      const content = component.getContent();
      stub.replaceWith(content);

      const layoutContent = content.querySelector('[data-layout="1"]');

      if (layoutContent && stubChilds.length) {
        // changes
        const nodes = Array.from(stubChilds);
        layoutContent.append(...nodes);
      }
    });
    return fragment.content;
  }

  show() {
    this.getContent().style.display = "";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}
