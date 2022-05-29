declare namespace CouponModule {
  export interface CouponObjectData {
    [key: string]: unknown;
  }

  // eslint-disable-next-line no-shadow
  export enum CouponTypes {
    Partner = "Partner",
    OnlineShop = "OnlineShop"
  }

  // eslint-disable-next-line no-shadow
  export enum CouponStatus {
    Undefined = "Undefined",
    NotActivated = "NotActivated",
    Activated = "Activated",
    Redeemed = "Redeemed"
  }

  export interface CouponData {
    couponTyp: CouponTypes;
    status: CouponStatus;
    promotionId?: string;
    partnerName?: string;
    partnerSubGroup?: string;
    publicPartnerIds?: string[];
    headline?: string;
    copytext?: string;
    partnerLogoUrl?: string;
    promotionOrProductImageUrl?: string;
    actionImageAppUrl?: string;
    productUrl?: string;
    howItWorksText?: string;
    infoText?: string;
    registerFrom?: string | Date;
    registerTo?: string | Date;
    isNew: boolean;
  }

  export interface CouponFilter {
    couponStatus?: string;
    couponType?: string;
    partnerNames?: string[];
    promotionIds?: string[];
    onlyNewCoupons?: boolean;
  }

  export interface CouponModObject {
    promotionId?: string;
    partnerSubGroup?: string;
  }

  export interface CouponServiceResult<T> {
    [x: string]: unknown;
    data: T;
  }

  export interface CouponModuleState {
    couponListAll: CouponObjectData[];
    couponList: CouponObjectData[];
    lastCall: number;
    currentFilter: CouponFilter | null;
    overrideFilter: CouponFilter | null;
  }

  export interface CouponFilterState {
    couponStatus: string;
    couponType: string;
    partnerNames: string[];
    promotionIds: string[];
    onlyNewCoupons: boolean;
  }
}
