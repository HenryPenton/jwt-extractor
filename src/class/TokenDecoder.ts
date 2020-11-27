import { decode } from "js-base64";

export class TokenDecoder {
  private decodedPayload: any;

  constructor(token: string) {
    this.setToken(token);
  }

  setToken(token: string) {
    const payload = token.split(".")[1];
    this.decodedPayload = JSON.parse(decode(payload));
  }

  getPayload() {
    return this.decodedPayload;
  }

  getProperty(property: string) {
    return this.decodedPayload[property];
  }
}
