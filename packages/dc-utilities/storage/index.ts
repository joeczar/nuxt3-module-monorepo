import { LocalStorage } from "./LocalStorage";
import { SessionStorage } from "./SessionStorage";

export const REFRESH_TOKEN_PREFIX = "rfr_";
export const ACCESS_TOKEN_PREFIX = "at_";
// interface ParsedStorage {
//   storage: { [key: string]: unknown };
// }

export const local = new LocalStorage();
export const sessionStorage = new SessionStorage();

export const persistRefreshTokenForAutoLogin = (
  key: string,
  refresh_token: { username: string; token: string }
): void => local.setItem(`${REFRESH_TOKEN_PREFIX}_${key}`, refresh_token);

export const removeRefreshTokenForAutoLogin = (key: string): void =>
  local.removeItem(`${REFRESH_TOKEN_PREFIX}_${key}`);

const transformToken = (token: string): string => {
  let t = token;
  if (typeof t === "string") {
    t = t.match(/^".+"$/) ? JSON.parse(t) : t;
    if (t !== "undefined") {
      return t;
    }
  }
  return t;
};

export const getRefreshToken = (
  key: string
): { username: string; token: string } => {
  const token = local.getItem(`${REFRESH_TOKEN_PREFIX}_${key}`);
  if (token) {
    return JSON.parse(token);
  }
};

export const cacheAccessToken = (key: string, access_token: string): void =>
  local.setItem(`${ACCESS_TOKEN_PREFIX}_${key}`, access_token);

export const removeAccessToken = (key: string): void =>
  local.removeItem(`${ACCESS_TOKEN_PREFIX}_${key}`);

export const getAccessToken = (key: string): string => {
  const token = local.getItem(`${ACCESS_TOKEN_PREFIX}_${key}`);
  if (token) {
    return transformToken(token);
  }
};
export default {
  localStorage: local,
  sessionStorage,

  persistRefreshTokenForAutoLogin,
  removeRefreshTokenForAutoLogin,
  getRefreshToken,

  cacheAccessToken,
  removeAccessToken,
  getAccessToken
};
