import { payload } from "./payload";

export const payloadProperty = (token: string, property: string) => {
  const requestedPayload = payload(token);
  if (requestedPayload) {
    return requestedPayload[property];
  } else {
    return undefined;
  }
};
