import { Router } from "./router";

describe("Router test", () => {
  function routerFactory() {
    return new Router("app");
  }
  let router: Router;

  beforeEach(() => {
    // @ts-ignore: it is necessary to remove instance to apply on next
    Router.__instance = null;
    router = routerFactory();
    document.body.innerHTML = "<div id='app'>2</div";
  });
  afterEach(() => () => {
    document.body.innerHTML = "";
  });

  test("Is router singleton", () => {
    const doubleRouter = new Router("app");

    expect(router).toEqual(doubleRouter);
  });

  describe("Test setFallBack method of router", () => {
    test("return the same instance", () => {
      const doubleRouter = router!.setFallBack("/404", {});

      expect(router).toEqual(doubleRouter);
    });
  });

  describe("Test use method of router", () => {
    test("return the same instance", () => {
      const doubleRouter = router.use("/", {});
      expect(router).toEqual(doubleRouter);
    });
  });

  describe("Test go method of router", () => {
    test("it should be class Block", () => {
      router.use("/", {});
      expect(() => router.go("/")).toThrow();
    });

    test("create instance in routes", () => {
      const blockFake = jest.fn();
      const router = new Router("app");
      router.use("/", blockFake as any);
      router.go("/");

      expect(blockFake).toHaveBeenCalledTimes(1);
    });

    test("it should change url by using history api", () => {
      const blockFake = jest.fn();

      const router = new Router("app");
      const pathName = "/start";
      const spyFn = jest.spyOn(global.history, "pushState");

      router.use(pathName, blockFake as any);
      router.go(pathName);

      expect(blockFake).toHaveBeenCalled();
      expect(spyFn).toHaveBeenCalled();
      expect(global.location.pathname).toEqual(pathName);
    });
  });

  describe("Test back method of router", () => {
    test("it should change url by using history api", () => {
      const spyFn = jest.spyOn(global.history, "back");
      router.back();

      expect(spyFn).toHaveBeenCalled();
    });
  });

  describe("Test forward method of router", () => {
    test("it should change url by using history api", () => {
      const spyFn = jest.spyOn(global.history, "forward");
      router.forward();

      expect(spyFn).toHaveBeenCalled();
    });
  });

  describe("Test getRoute method of router", () => {
    test("it should change url by using history api", () => {
      const noop = function () {};
      const router = new Router("app");
      const pathName = "/start";

      router.use(pathName, noop as any);

      const route = router.getRoute(pathName);
      expect(route).not.toBeUndefined();
    });
  });
});
