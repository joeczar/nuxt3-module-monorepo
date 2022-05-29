type StorageItem = string | null;

export default abstract class Store {
  constructor(private storeType: Storage) {
    this.storeType = storeType;
  }

  store = (() => {
    try {
      const s: Storage = this.storeType;
      return s;
    } catch (e) {
      return null;
    }
  })();

  setItem(key: string, value: unknown): void {
    if (this.store) {
      const v = typeof value !== "string" ? JSON.stringify(value) : value;
      this.store.setItem(key, v);
    }
  }

  getItem(key: string): StorageItem {
    if (this.store) {
      return this.store.getItem(key);
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.store) {
      this.store.removeItem(key);
    }
  }

  isKey(key: string): boolean {
    if (this.store && this.store.getItem(key)) {
      return true;
    }
    return false;
  }

  clear(): void {
    if (this.store) {
      this.store.clear();
    }
  }
}
