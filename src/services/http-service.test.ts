import { Http, Methods, OptionsParams, ResponseTypes } from "./http-service";

describe("Test http-service", () => {
  test("init", () => {
    const testUrl = "test-url";
    const http = new Http(testUrl);

    expect(http instanceof Http).toBe(true);

    // @ts-ignore: check private variable
    expect(http._baseUrl).toBe(testUrl);
  });
});

describe("request method has been called", () => {
  const testUrl = "test-url";
  const http = new Http(testUrl);

  const mockFn = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve("called");
    });
  });

  test("get", () => {
    http.request = mockFn;
    http.get(testUrl).then((data) => expect(data).toBe("called"));
    expect(mockFn).toHaveBeenCalled();
  });

  test("put", () => {
    http.request = mockFn;
    http.put(testUrl, {}).then((data) => expect(data).toBe("called"));
    expect(mockFn).toHaveBeenCalled();
  });

  test("post", () => {
    http.request = mockFn;
    http.post(testUrl, {}).then((data) => expect(data).toBe("called"));
    expect(mockFn).toHaveBeenCalled();
  });

  test("delete", () => {
    http.request = mockFn;
    http.delete(testUrl, {}).then((data) => expect(data).toBe("called"));
    expect(mockFn).toHaveBeenCalled();
  });
});

describe("request method accept right params", () => {
  const testUrl = "test-url";
  const http = new Http(testUrl);

  const mockFn = jest
    .fn()
    .mockImplementation(
      (
        url: string,
        {
          data,
          headers = {},
          method,
          withCredentials,
          responseType = ResponseTypes.default,
        }: OptionsParams,
        timeout = 5000
      ) => {
        return new Promise((resolve, reject) => {
          resolve({ url, data, headers, method, withCredentials, responseType });
        });
      }
    );

  test("get", () => {
    const optionsMock = {
      withCredentials: true,
      responseType: ResponseTypes.json,
    };
    http.request = mockFn;
    http.get<OptionsParams>(testUrl, optionsMock).then((options) => {
      expect(options.withCredentials).toBe(true);
      expect(options.responseType).toBe(ResponseTypes.json);
      expect(options.method).toBe(Methods.GET);
    });
  });

  test("put", () => {
    const optionsMock = {
      data: { test: 1 },
      withCredentials: false,
      responseType: ResponseTypes.json,
    };

    http.request = mockFn;
    http.put<OptionsParams>(testUrl, optionsMock).then((options) => {
      expect(options.withCredentials).toBe(false);
      expect(options.responseType).toBe(ResponseTypes.json);
      expect(options.data).toBe(optionsMock.data);
      expect(options.method).toBe(Methods.PUT);
    });
  });

  test("post", () => {
    const optionsMock = {
      data: { user: 1 },
      withCredentials: true,
      responseType: ResponseTypes.blob,
    };

    http.request = mockFn;
    http.post<OptionsParams>(testUrl, optionsMock).then((options) => {
      expect(options.withCredentials).toBe(true);
      expect(options.responseType).toBe(ResponseTypes.blob);
      expect(options.data).toBe(optionsMock.data);
      expect(options.method).toBe(Methods.POST);
    });
  });

  test("delete", () => {
    const optionsMock = {
      data: { user: 1 },
      withCredentials: false,
      responseType: ResponseTypes.document,
    };

    http.request = mockFn;
    http.delete<OptionsParams>(testUrl, optionsMock).then((options) => {
      expect(options.withCredentials).toBe(false);
      expect(options.responseType).toBe(ResponseTypes.document);
      expect(options.data).toBe(optionsMock.data);
      expect(options.method).toBe(Methods.DELETE);
    });
  });
});
