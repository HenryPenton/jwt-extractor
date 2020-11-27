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
        throw new Error("Couldn't parse token, perhaps it is invalid");
      }
    } else {
      throw new Error("Token not long enough");
    }
  }

  getPayload() {
    return this.decodedPayload;
  }

  getProperty(property: string) {
    if (this.decodedPayload) {
      return this.decodedPayload[property];
    } else {
      throw new Error("No payload found");
    }
  }
}
