import { useEffect } from "react";

declare global {
  interface Window {
    __tcfapi?: (
      command: string,
      version: number,
      callback: (tcData: any, success: boolean) => void
    ) => void;
  }
}

export const useSyncGoogleConsent = () => {
  useEffect(() => {
    const trySyncConsent = () => {
      if (typeof window.__tcfapi !== "function") {
        // __tcfapi not available yet, try again
        setTimeout(trySyncConsent, 500);
        return;
      }

      // Request consent info from Google's CMP
      window.__tcfapi("getTCData", 2, (tcData: { eventStatus: string; gdprApplies: any; purpose: { consents: boolean[]; }; }, success: any) => {
        if (success && tcData.eventStatus === "tcloaded") {
          const hasConsent =
            tcData.gdprApplies &&
            tcData.purpose?.consents?.[1] === true; // Purpose 1: storage access

          if (hasConsent) {
            // Set your own consent flags
            localStorage.setItem("CookieConsent", "true");
            document.cookie = "CookieConsent=true; path=/";
          }
        }
      });
    };

    trySyncConsent();
  }, []);
};
