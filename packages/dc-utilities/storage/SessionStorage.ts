/* eslint-disable no-eval */
import Store from "./Storage";

export class SessionStorage extends Store {
  constructor() {
    const ss = (() => {
      try {
        const s = sessionStorage;
        return s;
      } catch (e) {
        return null;
      }
    })();

    super(ss);
  }
}
export default new SessionStorage();
