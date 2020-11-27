import { decode } from "js-base64";

export class PayloadExtractor {
  token: string;
  payload: string;
  decodedPayload;
  constructor(token: string) {
    this.token = token;
    this.payload = this._setPayload();
    this.decodedPayload = this._setDecodedPayload();
  }

  _setPayload() {
    return this.token.split(".")[1];
  }

  _setDecodedPayload() {
    return JSON.parse(decode(this.payload));
  }

  getProperty(property: string) {
    return this.decodedPayload[property];
  }
}
