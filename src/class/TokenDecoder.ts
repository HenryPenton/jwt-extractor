import { decode } from "js-base64";

export class TokenDecoder {
  private decodedPayload: any;

  constructor(token: string) {
    this.setToken(token);
  }

  setToken(token: string) {
    const split = token.split(".");
    if (split.length > 1) {
      try {
        const payload = split[1];
        this.decodedPayload = JSON.parse(decode(payload));
      } catch {
        this.decodedPayload = undefined;
      }
    }
  }

  getPayload() {
    return this.decodedPayload;
  }

  getProperty(property: string) {
    if (this.decodedPayload) {
      return this.decodedPayload[property];
    } else {
      return undefined;
    }
  }
}
