declare namespace DCComponent {
  export interface OverlayLayerFull {
    name: string;
    headline: string;
    trackingId: string;

    copy?: string;
    active?: boolean;
    favoriteLayer?: boolean;
    campaignName?: string;
    imageMobile?: Record<string, unknown>;
    imageTablet?: Record<string, unknown>;
    imageDesktop?: Record<string, unknown>;
    layerCtaInternal?: string;
    layerCtaExternal?: string;
    layerCtaNewWindow?: boolean;
    layerCta?: string;
    bottomLinkInternal?: string;
    bottomLinkExternal?: string;
    bottomLink?: string;
    bottomLinkNewWindow?: boolean;
    showTimes?: number | string;
    showAppStoreIcons?: boolean;
    observeAppLogin?: boolean;
    observeAppLoggedInLongAgo?: boolean;
    filterByGender?: string;
    filterByLastTransaction?: Date | string;
    longagoDate?: Date | string;
    startDate?: Date | string;
    endDate?: Date | string;
    priority?: number | string;
    zipCodeArray?: string[];
    blacklist?: string[];
    whitelist?: string[];
    activateAnimatedLayer?: boolean;
    animatedImagesMobile?: string[];
    animatedImagesTablet?: string[];
    animatedImagesDesktop?: string[];
  }
}
