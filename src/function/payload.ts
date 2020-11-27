import { decode } from "js-base64";

export const payload = (token: string) => {
  const split = token.split(".");
  if (split.length > 1) {
    try {
      return JSON.parse(decode(split[1]));
    } catch {
      return undefined;
    }
  }
  return undefined;
};
