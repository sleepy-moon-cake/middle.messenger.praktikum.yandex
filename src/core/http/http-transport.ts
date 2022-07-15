export class HTTPTransport {
  static METHODS = {
    GET: "GET",
    PUT: "PUT",
    POST: "POST",
    DELETE: "DELETE",
  };

  static __instance: HTTPTransport | null = null;

  constructor() {
    if (HTTPTransport.__instance) {
      return HTTPTransport.__instance;
    }
    HTTPTransport.__instance = this;
  }

  get = (url: string, options = {}) => {
    return this.request(url, { ...options, method: HTTPTransport.METHODS.GET });
  };

  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: HTTPTransport.METHODS.PUT });
  };

  post = (url: string, options = {}) => {
    return this.request(url, { ...options, method: HTTPTransport.METHODS.POST });
  };

  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: HTTPTransport.METHODS.DELETE });
  };

  request(url: string, options: any, timeout = 5000): Promise<XMLHttpRequest> {
    const { headers, data, method, credentials } = options;
    return new Promise((resolve, reject) => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open(method, url);

      if (credentials) {
        xhr.withCredentials = true;
      }
      xhr.responseType = "json";

      if ((headers && headers.length) || headers?.size) {
        for (const [key, value] of headers.entries()) {
          xhr.setRequestHeader(key, value as string);
        }
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.timeout = timeout;

      if (method === HTTPTransport.METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
