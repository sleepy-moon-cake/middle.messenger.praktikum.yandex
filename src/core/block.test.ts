import { Block } from "./block";
import { Events } from "./types";

describe("Test Block class", () => {
  document.body.innerHTML = `<div id="app">Text</div>`;

  class DummyBlock<T> extends Block<T> {
    render(): DocumentFragment {
      const divElement = document.createElement("div");
      divElement.setAttribute("id", "dummy");

      const fragment = document.createDocumentFragment();
      fragment.append(divElement);

      return fragment;
    }
  }

  test("init method", () => {
    const props = {
      value: 3,
    };
    const instance = new DummyBlock<{ value: number }>("div", "class", props);

    expect(instance.props?.value).toBe(props.value);
  });

  test("setProps method", () => {
    const props = {
      value: 3,
    };
    const instance = new DummyBlock<{ value: number }>("div", "class");
    instance.setProps(props);

    expect(instance.props?.value).toBe(props.value);
  });

  test("getContent method", () => {
    const instance = new DummyBlock<{ value: number }>("div", "class");
    const element = instance.getContent();

    expect(element.nodeName).toBe("DIV");
    expect(element.className).toBe("class");
  });

  test("hide method", () => {
    const instance = new DummyBlock<{ value: number }>("div", "class");
    instance.hide();

    const element = instance.getContent();
    expect(element.className).toContain("hidden");
  });

  test("show method", () => {
    const instance = new DummyBlock<{ value: number }>("div", "class");
    instance.hide();
    instance.show();

    const element = instance.getContent();
    expect(element.className).not.toContain("hidden");
  });

  test("render method", () => {
    const instance = new DummyBlock<{ value: number }>("div", "class");

    const element = instance.render();
    expect(element.nodeName).toBe("#document-fragment");
  });

  test("destroy method", () => {
    const instance = new DummyBlock<{ value: number }>(
      "div",
      "class",
      undefined,
      undefined,
      "app"
    );
    instance.destroy();

    expect(document.body.innerHTML).toBe(`<div id="app"></div>`);
  });

  test("check event", () => {
    const jestFn = jest.fn();

    const events: Events = {
      click: [
        {
          id: "dummy",
          fn: jestFn,
        },
      ],
    };

    const instance = new DummyBlock<{ value: number }>(
      "div",
      "class",
      undefined,
      events,
      "app"
    );

    const element = instance.getContent().querySelector("#dummy") as HTMLElement;
    element.click();

    expect(jestFn).toHaveBeenCalled();
  });
});
