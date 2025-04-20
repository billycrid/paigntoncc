import { useEffect } from "react";

export const useSyncGoogleConsent = () => {
  useEffect(() => {
    const trySyncConsent = () => {
      if (typeof window.__tcfapi !== "function") {
        // __tcfapi not available yet, try again
        setTimeout(trySyncConsent, 500);
        return;
      }

      // Request consent info from Google's CMP
      window.__tcfapi("getTCData", 2, (tcData, success) => {
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
