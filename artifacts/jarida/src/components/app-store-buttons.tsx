import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/app-store";

export function AppStoreButton({
  type,
  theme = "light",
}: {
  type: "ios" | "android";
  theme?: "light" | "dark";
}) {
  const isIos = type === "ios";
  const href = isIos ? APP_STORE_URL : GOOGLE_PLAY_URL;
  const bg =
    theme === "light"
      ? "bg-black text-white hover:bg-black/80"
      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isIos ? "Download on the App Store" : "Get it on Google Play"}
      className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-colors ${bg} w-full sm:w-auto justify-center`}
    >
      {isIos ? (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M16.365 14.502c-.015-3.056 2.502-4.526 2.616-4.6-1.421-2.073-3.626-2.355-4.42-2.39-1.897-.19-3.702 1.118-4.665 1.118-.962 0-2.45-1.096-4.004-1.066-2.016.03-3.876 1.171-4.908 2.973-2.091 3.621-.534 8.975 1.503 11.916.994 1.439 2.164 3.045 3.731 2.986 1.498-.06 2.07-.968 3.864-.968 1.78 0 2.304.968 3.894.938 1.627-.03 2.62-1.468 3.6-2.905 1.134-1.657 1.6-3.262 1.624-3.344-.038-.016-3.007-1.15-3.023-4.228zm-2.45-7.395c.829-1 1.385-2.394 1.233-3.782-1.189.048-2.648.791-3.477 1.791-.741.888-1.411 2.309-1.229 3.676 1.328.102 2.643-.684 3.473-1.685z" />
        </svg>
      ) : (
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.523 15.341l-4.624-4.624 4.624-4.624c.321.144.624.314.907.509l4.57 3.199c.928.65.928 1.706 0 2.356l-4.57 3.199c-.283.195-.586.365-.907.509l-4.624-4.624zM2.875 3.393L11.8 12.318 2.875 21.243c-.495-.297-.875-.769-.875-1.341V4.734c0-.572.38-1.044.875-1.341z" />
          <path d="M12.918 13.436L3.993 22.361c.404.242.878.361 1.383.361 1.055 0 2.012-.497 2.616-1.282l4.926-7.004zM12.918 11.202L3.993 2.277c.404-.242.878-.361 1.383-.361 1.055 0 2.012.497 2.616 1.282l4.926 7.004z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[11px] leading-none mb-1 opacity-80">
          {isIos ? "Download on the" : "GET IT ON"}
        </div>
        <div className="text-base font-semibold leading-none tracking-wide">
          {isIos ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}
