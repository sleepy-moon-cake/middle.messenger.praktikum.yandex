export class HTTPTransport {
  static METHODS = {
    GET: "GET",
    PUT: "PUT",
    POST: "POST",
    DELETE: "DELETE",
  };

  get = (url: string, options = {}) => {
    return this.request(
      url,
      { ...options, method: HTTPTransport.METHODS.GET },
      options.timeout
    );
  };

  put = (url: string, options = {}) => {
    return this.request(
      url,
      { ...options, method: HTTPTransport.METHODS.PUT },
      options.timeout
    );
  };

  post = (url: string, options = {}) => {
    return this.request(
      url,
      { ...options, method: HTTPTransport.METHODS.POST },
      options.timeout
    );
  };

  delete = (url: string, options = {}) => {
    return this.request(
      url,
      { ...options, method: HTTPTransport.METHODS.DELETE },
      options.timeout
    );
  };

  request = (url: string, options: any, timeout = 5000) => {
    const { headers, data, method } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      if (headers && headers.length) {
        for (const [key, value] of Object.entries(headers)) {
          xhr.setRequestHeader(key, value);
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
  };
}
