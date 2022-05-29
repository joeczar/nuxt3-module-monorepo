import { request, requestAxios, sleep } from "../promise";

describe("request", () => {
  const object = { test: [{ retrieveThis: { almostThere: "Got it!" } }] };
  const path = "test[0].retrieveThis.almostThere";
  const resolveMe = Promise.resolve(object);

  it("gets a rescource ", () => request(resolveMe, path).then((result) => expect(result[1]).toBe("Got it!")));
  it("fails nicely when no rescource", () => request(resolveMe, "wrong/path").then((result) => expect(result[1]).toBeUndefined()));
});
describe("requestAxios", () => {
  const response = { data: "Tadaa!" };

  const mockAxiosRequest = Promise.resolve(response);

  it("requests an Axios rescource with error handling", async () => {
    const result = await requestAxios(mockAxiosRequest);
    expect(result[1]).toBe("Tadaa!");
  });
});

jest.useFakeTimers();

describe("sleep", () => {
  it("is a timeout in a promise", async () => new Promise((res) => {
      sleep(50).then((result) => {
        console.log("slept", result);
        res(0);
      });
    }).then(() => {
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 50);
    }));
});
