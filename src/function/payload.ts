import { decode } from "js-base64";

export const payload = (token: string) => {
  const payload = token.split(".")[1];
  return JSON.parse(decode(payload));
};
