declare namespace PartnerModule {
  export interface PartnerName {
    name: string;
    link: string;
  }

  export interface FullPartnerData {
    id: string;
    incentiveText: string;
    link: string;
    logo: string;
    name: string;
    partnerSubgroup: string;
    publicPartnerId: string;
    score: string;
  }

  export interface ArrayFilterObject {
    nameFilter: string[];
    transformArray?: ((v: string) => string)[];
  }

  export interface PartnerImage {
    id: string;
    partnerSubgroup: string;
    name: string;
    logos: [
      {
        publicPartnerId: string;
        partnerVariant: string;
        logoUrl: string;
        fileName: string;
        validFrom: string;
        validTo: string;
      }
    ];
  }

  export interface PartnerNameItem {
    name: string;
    logo: string;
    link: string;
  }
  export interface PartnerCategoryItem {
    logo: string;
    name: string;
  }
  export interface PartnerState {
    partnerData: PartnerNameItem[];
    partnerDataWasCalled: boolean;
    partnerCategories: PartnerCategoryItem[];
    partnerCategoriesWasCalled: boolean;
  }

  export interface PartnerTeaserData {
    name: string;
    logo: string;
    link: string;
    incentiveText: string;
    flapText: string;
    id: string;
  }

  export interface PartnerLogoData {
    name: string;
    logo: string;
    link: string;
    id: string;
  }

  export interface PartnersGridDataSearch {
    result: PartnerTeaserData[];
    suggestions: PartnerTeaserData[],
    suggestionText: string,
    hasMoreResults: boolean;
    totalNumberOfResults: number;
  }

  export interface PartnersGridData {
    result: PartnerTeaserData[];
    hasMoreResults: boolean;
    totalNumberOfResults: number;
  }

  export interface PartnerFilterObject {
    query?: string;
    categories?: string[];
    partnerType?: string;
  }

  // eslint-disable-next-line no-shadow
  export enum PartnerQueryType {
    online = "ONLINE",
    premium = "PREMIUM",
    all = "ALL"
  }

  export interface PartnerSearchRequest {
    query?: string;
    categories?: string[];
    limit?: number;
    offset?: number;
    type: PartnerQueryType;
    paths?: string[];
    names?: string[];
  }

  export interface PartnerLogoGraphQlItem {
    common: {
      partnerName: string;
      partnerLogo: string;
    };
    id: string;
    partnerDetailLink: string;
  }

  export interface PartnerGraphQlItem {
    common: {
      partnerName: string;
      partnerLogo: string;
      isPremiumPartner: boolean;
      partnerHighlightText: string;
      onlinePartnerCategories: string[];
    };
    id: string;
    partnerDetailLink: string;
    pointmodule: {
      incentivePoints: string;
      incentiveUnit: string;
    };
  }

  export interface PartnerGraphQlNameItem {
    common: {
      partnerName: string;
      partnerLogo: string;
    };
    partnerDetailLink: string;
  }

  export interface PartnerGraphQlResultsType {
    items: PartnerGraphQlItem[];
    pageInfo: {
      hasMoreResults: boolean;
      totalNumberOfResults: number;
    };
  }

  export interface PartnerGraphQlResults {
    onlinePartner: PartnerGraphQlResultsType;
  }

  export interface PartnerGraphQlResponseSearch {
    pageInfo: {
      hasMoreResults: boolean;
      totalNumberOfResults: number;
    };
    originalResult: PartnerGraphQlResults;
    suggestionResult: PartnerGraphQlResults;
    suggestionText: string;
  }

  export interface PartnerGraphQlResponse {
    pageInfo: {
      hasMoreResults: boolean;
      totalNumberOfResults: number;
    };
    items: PartnerGraphQlItem[];
  }
  export interface PartnerLogoGraphQlResponse {
    items: PartnerLogoGraphQlItem[];
  }

}
