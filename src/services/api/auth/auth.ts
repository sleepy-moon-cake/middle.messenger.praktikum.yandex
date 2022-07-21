import { HTTPTransport } from "../../../core/http/http-transport";
import { SignupPayload } from "../types";

export class AuthService {
  private http: HTTPTransport = new HTTPTransport();
  private authUrl: string = "/auth";
  private host = process.env.API_ENDPOINT;
  private headers: Map<string, string> = new Map([
    ["content-type", "application/json; charset=utf-8"],
  ]);

  public async signup(payload: SignupPayload): Promise<XMLHttpRequest> {
    const url = this.host + this.authUrl + "/signup";

    const response = await this.http.post(url, {
      data: JSON.stringify(payload),
      headers: this.headers,
    });

    return response;
  }

  public async signin(payload: any): Promise<XMLHttpRequest> {
    const url = this.host + this.authUrl + "/signin";

    const response = await this.http.post(url, {
      credentials: true,
      data: JSON.stringify(payload),
      headers: this.headers,
    });

    return response;
  }

  public async user(): Promise<XMLHttpRequest> {
    const url = this.host + this.authUrl + "/user";
    const response = await this.http.get(url, { credentials: true });

    return response;
  }

  public async logout(): Promise<XMLHttpRequest> {
    const url = this.host + this.authUrl + "/logout";

    const response = await this.http.post(url, {
      credentials: true,
      headers: this.headers,
    });

    return response;
  }
}

export const authService = new AuthService();
