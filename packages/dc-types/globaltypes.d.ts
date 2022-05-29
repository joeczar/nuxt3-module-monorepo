// this is needed, otherwise the declare global will not applied
export {};

declare global {
  interface Window {
    UA: Promise<{
      channel: {
        channelId: string;
        optOut: () => void;
      };
      plugins: {
        load: (
          name: string,
          url: string,
          options: Partial<{
            appearDelay: number; // default 0
            askAgainDelay: number; // default 1209600 (2 weeks)
            defaultLanguage: string; // default en
            stylesheet: string;
            i18n: Record<
              string,
              {
                title: string;
                message: string;
                accept: string;
                deny: string;
              }
            >;
            position: string;
            auto: boolean;
            type: "alert" | "bell";
          }>
        ) => Promise<Record<string, unknown>>;
      };
    }>;
  }

  interface SimpleStoreOptions<T> {
    state: T;
    commit: (commitTrigger: string, payload?: any, ...options: any[]) => void;
    dispatch: (actionTrigger: string, payload?: any, ...options: any[]) => void;
    getters: Record<string, any>;
  }

  interface PageConfig {
    is: string;
    meta: Record<string, boolean | string | number | Record<string, unknown>>;
    tracking: Record<string, boolean | string | number | Record<string, unknown>>;
    slots: Record<string, Record<string, unknown> | Record<string, unknown>[]>;
    theme: string;
    redirectionSettings: Record<string, boolean | string | number | Record<string, unknown>>;
  }
}
