import {
  persistRefreshTokenForAutoLogin,
  cacheAccessToken,
  getAccessToken,
  removeAccessToken,
  getRefreshToken,
  removeRefreshTokenForAutoLogin
} from "../storage";
import LocalStorage from "../storage/LocalStorage";

const REFRESH_TOKEN_PREFIX = "rfr_";
const ACCESS_TOKEN_PREFIX = "at_";

beforeEach(() => {
  localStorage.clear();
});
jest.spyOn(Storage.prototype, "setItem");
jest.spyOn(Storage.prototype, "getItem");
jest.spyOn(Storage.prototype, "removeItem");

test("should save to localStorage", () => {
  const KEY = "foo";
  const VALUE = "bar";
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
});

describe("LocalStorage", () => {
  it("should set an Item", () => {
    const store = LocalStorage;

    const key = "setLocalStorage";
    const userObj = { username: "PochoVilla", token: "123456" };

    store.setItem(key, userObj);
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(userObj));

    expect(localStorage.getItem(key)).toBe(JSON.stringify(userObj));
  });

  it("should return an item from storage", () => {
    const store = LocalStorage;

    const key = "getLocalStorage";
    const userObj = { username: "SteveMcQueen", token: "speeeeeeed!456" };

    store.setItem(key, userObj);
    const result = store.getItem(key);

    expect(result !== "undefined").toBe(true);
    expect(result).toBe(localStorage.getItem(key));
  });
});
describe("persistRefreshTokenForAutoLogin", () => {
  it("should set an Item", () => {
    const key = "persistRefreshToken";
    const tokenKey = `${REFRESH_TOKEN_PREFIX}_${key}`;
    const userObj = { username: "PochoVilla", token: "123456" };

    persistRefreshTokenForAutoLogin(key, userObj);

    expect(localStorage.setItem).toHaveBeenCalledWith(tokenKey, JSON.stringify(userObj));
    const storageItem = localStorage.getItem(tokenKey);
    expect(storageItem).toBe(JSON.stringify(userObj));
  });
});

describe("getRefreshToken", () => {
  it("gets an refresh token", () => {
    const key = "getRefreshToken";
    const userObj = { username: "PochoVilla", token: "123456" };
    const tokenKey = `${REFRESH_TOKEN_PREFIX}_${key}`;

    persistRefreshTokenForAutoLogin(key, userObj);
    expect(localStorage.setItem).toHaveBeenCalledWith(tokenKey, JSON.stringify(userObj));

    const parsedStorage = JSON.parse(localStorage.getItem(tokenKey));

    expect(localStorage.getItem(tokenKey) !== undefined).toBe(true);
    expect(getRefreshToken(key)).toStrictEqual(parsedStorage);
  });
});
describe("removeRefreshTokenForAutoLogin", () => {
  it("should remove a persistRefreshTokenForAutoLogin", () => {
    const key = "removeRefreshToken";
    const userObj = { username: "PochoVilla", token: "123456" };
    const stringifiedValue = JSON.stringify(userObj);

    const tokenKey = `${REFRESH_TOKEN_PREFIX}_${key}`;

    persistRefreshTokenForAutoLogin(key, userObj);

    expect(localStorage.setItem).toHaveBeenCalledWith(tokenKey, stringifiedValue);
    expect(localStorage.getItem(tokenKey)).toBe(stringifiedValue);

    removeRefreshTokenForAutoLogin(key);
    expect(localStorage.getItem(tokenKey)).toBeNull();
  });
});
describe("cacheAccessToken", () => {
  it("should store an access token in local storage", () => {
    const key = "cacheAccessToken";
    const accessToken = "0123456789";
    const accessTokenKey = `${ACCESS_TOKEN_PREFIX}_${key}`;

    cacheAccessToken(key, accessToken);

    expect(localStorage.setItem).toHaveBeenCalledWith(accessTokenKey, accessToken);
    expect(localStorage.getItem(accessTokenKey) !== "undefined").toBe(true);
    expect(localStorage.getItem(accessTokenKey)).toBe(accessToken);
  });
});

describe("getAccessToken", () => {
  it("gets an access token", () => {
    const key = "user2Token";
    const accessToken = "0123456789";
    // const accessTokenKey = `${ACCESS_TOKEN_PREFIX}_${key}`;
    cacheAccessToken(key, accessToken);
    expect(getAccessToken(key)).toBe(accessToken);
  });
});
describe("removeAccessToken", () => {
  it("removes an acess token", () => {
    const key = "user2Token";
    const accessToken = "0123456789";
    const accessTokenKey = `${ACCESS_TOKEN_PREFIX}_${key}`;
    cacheAccessToken(key, accessToken);
    removeAccessToken(key);
    expect(localStorage.getItem(accessTokenKey)).toBeNull();
  });
});
