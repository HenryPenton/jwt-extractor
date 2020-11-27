import { decode } from "js-base64";

export class PayloadExtractor {
  private decodedPayload: any;

  constructor(token: string) {
    this.changeToken(token);
  }

  changeToken(token: string) {
    const payload = token.split(".")[1];
    this.decodedPayload = JSON.parse(decode(payload));
  }

  getProperty(property: string) {
    return this.decodedPayload[property];
  }
}
