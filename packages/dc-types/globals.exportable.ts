export interface SimpleStoreOptions<T> {
  state: T;
  commit: (commitTrigger: string, payload?: any, ...options: any[]) => void;
  dispatch: (actionTrigger: string, payload?: any, ...options: any[]) => void;
  getters: Record<string, any>;
}

export interface PageConfig {
  is: string;
  meta: Record<string, boolean | string | number | Record<string, unknown>>;
  tracking: Record<string, boolean | string | number | Record<string, unknown>>;
  slots: Record<string, Record<string, unknown> | Record<string, unknown>[]>;
  theme: string;
  redirectionSettings: Record<string, boolean | string | number | Record<string, unknown>>;
}
