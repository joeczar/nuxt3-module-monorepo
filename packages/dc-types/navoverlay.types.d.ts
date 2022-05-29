declare namespace NavOverlayModule {
  export interface OverlayData {
    [key: string]: unknown;
    name: string;
    active: boolean;
    copy: string;
    headline: string;
    trackingId: string;
    campaignName: string;
    showTimes: number;
    startDate: string | Date;
    endDate: string | Date;
    longagoDate: string | Date;
    favoriteLayer: boolean;
    observeAppLogin: boolean;
    filterByLastTransaction?: number | string;
    filterByGender?: string;
    zipCodeArray?: string[];
    blacklist?: string[];
    whitelist?: string[];
    priority?: number;
  }

  export interface OverlaysState {
    fullList: OverlayData[];
    filteredList: OverlayData[];
    iterator: number;
  }

  export interface OverlayActionContextGetters {
    sortedOverlayList: OverlayData[];
    currentlySelected: OverlayData;
    currentlySelectedStorageState: StorageLayerData;
    needsBookingsCalled: boolean;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    bookingsFilter: { StartDate: string; EndDate: string };
  }

  export interface LayerComparatorUser {
    gender?: string;
    appActive?: boolean;
    lastLoginActivity?: Date;
    lastAppActivity?: Date;
    lastTransaction?: Date;
  }

  export interface LayerComparator {
    user: LayerComparatorUser;
    currentRoute: string;
  }

  export interface PrepareLayerCall {
    options: GetOverlayOptions;
    comparator: LayerComparator;
  }

  export interface OverlayActionContext {
    state: OverlaysState;
    getters: OverlayActionContextGetters;
    commit: (name: string, payload?: unknown) => void;
    dispatch: (name: string, payload?: unknown) => unknown | Promise<unknown> | void;
  }
}
