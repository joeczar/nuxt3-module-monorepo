declare namespace DCObject {
  export interface Coupon {
    copytext: string;
    couponType: string;
    headline: string;
    howItWorksText: string;
    isNew: boolean;
    partnerLogoUrl: string;
    partnerName: string;
    partnerSubGroup: string;
    productUrl: string;
    promotionId: string;
    publicPartnerIds: string[];
    registerFrom: string;
    registerTo: string;
    status: string;
  }

  export interface Image {
    src: string;
    s?: string;
    m?: string;
    l?: string;
    alt: string;
    type?: "stretch" | "circle" | "cover" | "contain";
    width?: string | number;
    height?: string | number;
    align?: "center" | "right";
    meta?: Record<string, unknown>;
    block?: boolean;
    useBreakpoints?: boolean;
    preload?: boolean;
    swipeenabled?: boolean;
  }

  export interface AnimatedImage {
    src: string;
    s?: string;
    m?: string;
    l?: string;
    alt: string;
    type?: "stretch" | "circle" | "cover" | "contain";
    width?: string | number;
    height?: string | number;
    align?: "center" | "right";
    meta?: Record<string, unknown>;
    animationTime?: number;
  }

  export interface UserContent {
    html?: string;
    events: "click"[];
    tag: "div" | "span" | "section";
  }
}
