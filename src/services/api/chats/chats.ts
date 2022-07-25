import { HTTPTransport } from "../../../core/http/http-transport";

export class ChatsService {
  private http: HTTPTransport = new HTTPTransport();
  private chatsUrl: string = "/chats";
  private host = process.env.API_ENDPOINT;
  private headers: Map<string, string> = new Map([
    ["content-type", "application/json; charset=utf-8"],
  ]);

  async chats(): Promise<XMLHttpRequest> {
    const url = this.host + this.chatsUrl;

    return this.http.get(url, {
      credentials: true,
      headers: this.headers,
    });
  }

  async createChat(payload: any) {
    const url = this.host + this.chatsUrl;

    return this.http.post(url, {
      credentials: true,
      headers: this.headers,
      data: JSON.stringify(payload),
    });
  }

  deleteChat(payload: any) {
    const url = this.host + this.chatsUrl;

    return this.http.delete(url, {
      credentials: true,
      headers: this.headers,
      data: JSON.stringify(payload),
    });
  }

  async addUser(payload: any) {
    const url = this.host + this.chatsUrl + "/users";

    return this.http.put(url, {
      credentials: true,
      headers: this.headers,
      data: JSON.stringify(payload),
    });
  }

  deleteUser(payload: any) {
    const url = this.host + this.chatsUrl + "/users";

    return this.http.put(url, {
      credentials: true,
      headers: this.headers,
      data: JSON.stringify(payload),
    });
  }
}

export const chatsService = new ChatsService();
