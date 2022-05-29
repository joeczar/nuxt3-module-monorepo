/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from "lodash";
import { AxiosResponse } from "axios";

/**
 * request a resource with nice error-handling
 *
 * @param {Promise<object>} promise a function returning any promise
 * @param {String} path a lodash-style property path to resolve the result with
 *
 * @returns {Promise<[null, unknown]>} resolves to Promise<[null, any]> and rejects to Promise<[Error]>
 */
export const request = (
  promise: Promise<unknown>,
  path: string
): Promise<[null | Error, unknown]> =>
  promise
    .then((result) => [null, path ? get(result, path) : result] as [null, unknown])
    .catch((err) => [err, get(err, "response.data", null)] as [Error, unknown]);

/**
 * request a resource with nice error-handling
 *
 * @param {Promise<object>} promise a function returning an Axios promise
 *
 * @returns {Promise<[null, any]>} resolves to Promise<[null, any]> and rejects to Promise<[Error]>
 */
export const requestAxios = (promise: Promise<unknown>): Promise<[null | Error, unknown]> =>
  request(promise, "data");

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default { request, sleep };
