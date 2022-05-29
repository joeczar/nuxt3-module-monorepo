declare namespace BonusModule {
  export interface BonusData {
    image: { url: string; label: string };
    actualNeededPoints: number;
    originalNeededPoints?: number;
    productUrl?: string;
    discountInPercent?: number;
    productName?: string;
  }

  export interface BonusResultModel {
    totalNumberOfResults: number;
    hasMoreResults: boolean;
    result: BonusData[];
  }

  export interface BonusSearchRequest {
    query: string;
    categoryId?: string;
    productIds?: string[];
    minPrice?: number;
    maxPrice?: number;
  }
}
