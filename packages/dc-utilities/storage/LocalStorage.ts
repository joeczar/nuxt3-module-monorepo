/* eslint-disable no-eval */
import Store from "./Storage";

export class LocalStorage extends Store {
  constructor() {
    const ls = (() => {
      try {
        const s = localStorage;
        return s;
      } catch (e) {
        return null;
      }
    })();

    super(ls);
  }
}
export default new LocalStorage();
