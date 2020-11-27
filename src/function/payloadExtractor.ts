import { decode } from "js-base64";

export const payloadExtractor = (token: string, property: string) => {
  const payload = token.split(".")[1];
  const decodedpayload = JSON.parse(decode(payload));
  const requestedProperty = decodedpayload[property];
  return requestedProperty;
};
