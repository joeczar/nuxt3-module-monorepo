declare namespace SearchModule {
  // eslint-disable-next-line no-shadow
  export enum AlternatingSearchResultReasons {
    RESULT_MORE_VALID = "RESULT_MORE_VALID",
    RESULT_PROBABLY_WRONG = "RESULT_PROBABLY_WRONG"
  }
  export interface SearchResultDetailObject {
    result?: Record<string, unknown>[];
    totalNumberOfResults: number | string;
    hasMoreResults: boolean;
  }

  export interface PartnerGraphQlItem {
    common: {
      partnerName: string;
      partnerLogo: string;
      isPremiumPartner: boolean;
      partnerHighlightText: string;
    };
    id: string;
    partnerDetailLink: string;
    pointmodule: {
      incentivePoints: string;
      incentiveUnit: string;
    };
  }

  export interface GraphResultObject {
    items: Record<string, unknown>[];
    pageInfo: SearchResultDetailObject;
  }

  export interface PartnerGraphQlObject {
    items: PartnerGraphQlItem[];
    pageInfo: SearchResultDetailObject;
  }

  export interface SearchResultPartnerObject {
    premiumPartner: PartnerGraphQlObject;
    onlinePartner: PartnerGraphQlObject;
  }

  export interface SearchResultObject {
    premiumPartner: GraphResultObject;
    onlinePartner: GraphResultObject;
    faq: GraphResultObject;
    promoteaser: GraphResultObject;
    bonusItems: GraphResultObject;
  }

  export interface SearchState {
    query: string;
    suggestedQuery: string;
    limit: number;
    active: boolean;
    results?: SearchResultObject;
    resultsAlternative?: SearchResultObject;
    activePromise: Promise<unknown> | null;
    queryPrefix: string;
    querySuffix: string;
    useAlternative: boolean;
    alternatingReason: string;
    skipAlternateSelect: boolean;
  }

  export interface CombinedSearchFilter {
    query?: string;
    limit?: number;
    offset?: number;
  }

  export interface SearchStateContext {
    state: SearchState;
    getters: Record<string, unknown>;
    commit: (mutation: string, nV?: unknown) => void;
    dispatch: (actions: string, payload?: unknown) => Promise<unknown> | string | void;
  }
}
