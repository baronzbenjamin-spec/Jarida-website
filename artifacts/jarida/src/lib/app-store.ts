// PLACEHOLDER store URLs — Jarida has no published listings yet.
// Swap these for the real App Store and Google Play listing URLs once the
// apps are live (e.g. https://apps.apple.com/app/idXXXXXXXXX and
// https://play.google.com/store/apps/details?id=org.jarida.app).
// Until then these point at the generic store landing pages.
export const APP_STORE_URL = "https://www.apple.com/app-store/";

export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps";

export type Platform = "ios" | "android" | "other";

export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent || "";
  const isIos =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isIos) return "ios";
  if (/android/i.test(ua)) return "android";
  return "other";
}

export function getStoreUrl(platform: Platform): string {
  if (platform === "ios") return APP_STORE_URL;
  if (platform === "android") return GOOGLE_PLAY_URL;
  return GOOGLE_PLAY_URL;
}
