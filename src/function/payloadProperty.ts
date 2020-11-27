import { payload } from "./payload";

export const payloadProperty = (token: string, property: string) => {
  const requestedProperty = payload(token)[property];
  return requestedProperty;
};
