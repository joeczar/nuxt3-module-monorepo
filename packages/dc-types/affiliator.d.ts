declare namespace Affiliator {
  interface ClickOutProps {
    channel: "APP" | "WEB" | string;
    clickOutOrigin: string;
    publicPromotionId: string;
    cardNumber?: string; // not needed for some bff methods
  }
}
