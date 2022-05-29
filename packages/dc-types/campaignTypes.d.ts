export interface TrackingObject {
  event: string;
  type: string;
}
export interface CouponData {
  promotionId: string;
  partnerName: string;
  headline: string;
  copyText: string;
  partnerLogoUrl: string;
  promotionOrProductImageUrl: string;
}
export interface BlockData {
  isImage: boolean;
  headline: string;
  text: string;
  resourceType: string;
  imageSrc: { src: string } | null;
  couponData: CouponData | null;
}
export interface PrizeContainer {
  trackingObject: TrackingObject;
  blockData: BlockData;
}

export interface PrizeData {
  prizeId: string | number;
  type: string;
  name?: string;
  description?: string;
  couponId?: string | number;
  incentive?: string;
  imageUrl?: string;
  url?: string;
  couponData?: CouponData;
}

export interface DoorValidity {
  from: string;
  to: string;
  door: number | string;
}
export interface CollectedWin {
  prizeId: number;
  winDate: string;
  type: string;
  name: string;
  description: string;
  couponId: string | number;
  url: string;
}
export interface AdventWinData extends PrizeData {
  door: string | number;
  date: string;
  partner: string;
  headline?: string;
  text?: string;
  link?: string;
  image?: string;
  couponId: number | string;
  prizeId: number | string;
  parameterKey: number | string;
  type: WinType;
  coords: { x: number; y: number };
}

export interface SafariWinData extends AdventWinData {
  door: string | number;
  date: string;
  endDate: string;
  partner: string;
  headline?: string;
  layerText?: string;
  bonusShopUrl?: string;
  image?: string;
  imageNameInactive?: string;
  imageNameFindable?: string;
  imageNameFound?: string;
  couponId: number | string;
  prizeId: number | string;
  parameterKey: number | string;
  type: WinType;
  coords: { x: number; y: number };
  rectangle?: { x: number; y: number; width: number; height: number };
  doorValidity?: DoorValidity;
  couponValidity: string;
  animal?: string;
  winCopyCode?: string;
}
export interface RectangleData {
  x: number;
  y: number;
  width: number;
  height: number;
}
export type CoordsArray = [number, number];
export type RectangleBounds = [CoordsArray, CoordsArray];
export interface CoordsObject {
  x: number;
  y: number;
}
export interface Parameter {
  key: number | string;
  value: string;
}
