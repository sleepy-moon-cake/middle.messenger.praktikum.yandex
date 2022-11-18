import store from "../store/store";
import { cloneDeep, isDeepEqual } from "../utils";
import { EventsEnum, Meta, StoreEvent } from "./block-types";
import { EventBus } from "./event-bus";
import { Events, Props } from "./types";

export class Block<T = unknown> {
  props: Props;

  protected eventBus: EventBus;

  private _element!: HTMLElement;

  protected readonly _meta: Meta;

  private _storeEvents: StoreEvent[] = [];

  constructor(
    tagName = "div",
    containerClassName: string,
    props: Props = {},
    events: Events = {},
    rootId?: string
  ) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      containerClassName,
      props,
      events,
      rootId,
    };

    this.props = this._makePropsProxy(props);

    this._registerEventBusEvents(this.eventBus);
    this.eventBus.emit(EventsEnum.INIT);
  }

  init() {
    this._createResources();
    this._addComponentAttributes();
    this.eventBus.emit(EventsEnum.FLOW_CDM);
  }

  componentDidMount(): void {}

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return isDeepEqual(oldProps, newProps);
  }

  setProps<T>(nextProps: T): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  render(): DocumentFragment {
    throw new Error("The render method must be implemented");
  }

  subscribeToStoreEvent(eventName: string, callback: (path: string) => void): void {
    store.on(eventName, callback, this);
    this._storeEvents.push({ eventName, callback });
  }

  makePropsProxy(_: Props): Props | null {
    return null;
  }

  getContent(): HTMLElement {
    return this.element;
  }

  show(): void {
    this.getContent().classList.remove("hidden");
  }

  hide(): void {
    this.getContent().classList.add("hidden");
  }

  destroy(): void {
    this._componentWillUnmount();
  }

  get element(): HTMLElement {
    return this._element;
  }

  _registerEventBusEvents(eventBus: EventBus) {
    eventBus.on(EventsEnum.INIT, this.init, this);
    eventBus.on(EventsEnum.FLOW_CDM, this._componentDidMount, this);
    eventBus.on(EventsEnum.FLOW_CDU, this._componentDidUpdate, this);
    eventBus.on(EventsEnum.FLOW_RENDER, this._render, this);
  }

  _removeEventBusEvents() {
    this.eventBus.off(EventsEnum.INIT, this.init, this);
    this.eventBus.off(EventsEnum.FLOW_CDM, this._componentDidMount, this);
    this.eventBus.off(EventsEnum.FLOW_CDU, this._componentDidUpdate, this);
    this.eventBus.off(EventsEnum.FLOW_RENDER, this._render, this);
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _addComponentAttributes() {
    this._element.setAttribute("data-component", this.constructor.name);

    if (this._meta.containerClassName) {
      this._element.classList.add(this._meta.containerClassName);
    }
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(EventsEnum.FLOW_RENDER);
  }

  _componentWillUnmount() {
    this._removeAllEvents();
    const root = document.getElementById(this._meta.rootId || "");

    if (root) {
      root.innerHTML = "";
    }
  }

  _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const isEqual = this.componentDidUpdate(oldProps, newProps);

    if (!isEqual) {
      this.eventBus.emit(EventsEnum.FLOW_RENDER);
    }
  }

  _render(): void {
    this._removeEvents();
    this._element.innerHTML = "";
    this._element.appendChild(this.render());
    this._addEvents();
  }

  _makePropsProxy(props: Props): Props {
    const propsFromCustomMethod = this.makePropsProxy(props);

    if (propsFromCustomMethod) {
      return propsFromCustomMethod;
    }

    return new Proxy<Props>(props, {
      get: (target: Props, prop: string): unknown => {
        const value = target[prop] as unknown;

        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (
        target: Props,
        prop: string,
        value: string | Record<string, unknown>
      ): boolean => {
        const targetCopy = cloneDeep(target);
        target[prop] = value;

        this.eventBus.emit(EventsEnum.FLOW_CDU, targetCopy, target);

        return true;
      },
      deleteProperty: (target: Props, prop: string): boolean => {
        delete target[prop];
        return true;
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  _addEvents() {
    const { events = {} } = this._meta;

    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({ id, fn }) => {
        const nodeElement = this.element.querySelector(`#${id}`);

        if (!nodeElement) {
          return;
        }

        nodeElement.addEventListener(eventName, fn);
      });
    });
  }

  _removeEvents() {
    const { events = {} } = this._meta;

    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({ id, fn }) => {
        const nodeElement = this.element.querySelector(`#${id}`);

        if (nodeElement) {
          nodeElement.removeEventListener(eventName, fn);
        }
      });
    });
  }

  _removeStoreEvents() {
    this._storeEvents.forEach(({ eventName, callback }) => {
      store.off(eventName, callback, this);
    });
  }

  _removeAllEvents(): void {
    this._removeEventBusEvents();
    this._removeEvents();
    this._removeStoreEvents();
  }
}
