import { decode } from "js-base64";

export class PayloadExtractor {
  private _token: string;
  private _payload: string;
  private _decodedPayload;

  constructor(token: string) {
    this._token = token;
    this._payload = this._setPayload();
    this._decodedPayload = this._setDecodedPayload();
  }

  private _setPayload() {
    return this._token.split(".")[1];
  }

  private _setDecodedPayload() {
    return JSON.parse(decode(this._payload));
  }

  getProperty(property: string) {
    return this._decodedPayload[property];
  }
}
