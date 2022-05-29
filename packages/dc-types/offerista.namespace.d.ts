declare namespace Offerista {
  import { LocationStrategy } from "./offerista.enum";

  export interface LocationModel {
    strategy: LocationStrategy;
    latitude: number;
    longitude: number;
  }
  export interface ImageOptionsModel {
    imageWidth?: number;
    imageHeight?: number;
    fillColor?: string;
  }
  export interface SearchRequest {
    location: LocationModel;
    imageOptions: ImageOptionsModel;
  }
  export interface BrochurePageModel {
    pageNumber: number;
    imageUrl?: string;
  }

  export interface BrochureOverviewResultModel {
    id: number;
    title?: string;
    validFrom?: string;
    validTo?: string;
    companyId: number;
    companyTitle?: string;
    numberOfPages: number;
    firstPageImageUrl?: string;
  }
  export interface BrochureDetailResultModel {
    id: number;
    title?: string;
    validFrom?: string;
    validTo?: string;
    companyId: number;
    companyTitle?: string;
    trackingUrls?: string[];
    pages: BrochurePageModel[];
    clickHash?: string;
  }
  export interface BrochurePageViewResultModel {
    trackId?: string;
  }
  export interface DCApiErrorResultModel {
    method?: string;
    dcApiCode: number;
    message?: string;
  }
  export interface DCCampaignApiErrorResultModel {
    method?: string;
    campaignApiCode?: string;
    message?: string;
  }
  export interface MagentoErrorResultModel {
    errors?: string;
    userErrors?: string;
    customerUserErrors?: string;
  }
  export interface DetailsModel {
    BrochureId: number;
    location: LocationModel;
  }
  export interface ErrorResultModel {
    traceId?: string;
    xTraceRequestId?: string;
    campaignApiErrors?: DCCampaignApiErrorResultModel[];
    dcApiErrors?: DCApiErrorResultModel[];
    magentoErrors?: MagentoErrorResultModel[];
    validationErrors?: { string: string[] };
    commonErrors?: string[];
  }
  export interface TrackImpressionModel {
    BrochureIds?: number[];
    location: LocationModel;
  }
  export interface TrackPageDurationModel {
    BrochureId: number;
    location: LocationModel;
    pageNumber: number;
    duration: number;
    TrackId?: string;
  }
  export interface TrackPageViewModel {
    BrochureId: number;
    location: LocationModel;
    pageNumber: number;
    numberOfPages: number;
    companyId: number;
    clickHash?: string;
  }

  export interface TrackId {
    trackId: string;
  }
  export interface TrackDuration {
    pageNumber: number;
    duration: number;
  }
  export interface State {
    brochures: BrochureOverviewResultModel[];
    postcode: number;
    userPostcode: number;
    location: LocationModel;
    currentBrochure: BrochureDetailResultModel[];
    hasLocation: boolean;
    visibleBrochureIds: number[];
    currentPages: TrackPageViewModel[];
    TrackIds: string[];
    emptyResult: boolean;
    duration: TrackDuration[];
    trackedPageView: TrackPageViewModel[];
  }
}
