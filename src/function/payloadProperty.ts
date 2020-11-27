import { decode } from "js-base64";
import { payload } from "./payload";

export const payloadProperty = (token: string, property: string) => {
  const requestedPayload = payload(token);
  if (requestedPayload) {
    if (requestedPayload[property]) {
      return requestedPayload[property];
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};
