import { HTTPTransport } from "../../../core/http/http-transport";

export class UserService {
  private http: HTTPTransport = new HTTPTransport();
  private userUrl: string = "/user";
  private host = process.env.API_ENDPOINT;
  private headers: Map<string, string> = new Map([
    ["content-type", "application/json; charset=utf-8"],
  ]);

  public async user(id: number): Promise<XMLHttpRequest> {
    const url = this.host + this.userUrl + "/" + String(id);

    return this.http.get(url, { headers: this.headers });
  }

  public async changeProfile(payload: any) {
    const url = this.host + this.userUrl + "/profile";
    return this.http.put(url, {
      data: JSON.stringify(payload),
      headers: this.headers,
      credentials: true,
    });
  }

  public async changePassword(payload: any) {
    const url = this.host + this.userUrl + "/password";
    return this.http.put(url, {
      data: JSON.stringify(payload),
      headers: this.headers,
      credentials: true,
    });
  }

  public async changeAvatar() {
    // later
  }
}

export const userService = new UserService();
