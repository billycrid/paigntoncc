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
    const interval = setInterval(() => {
      if (typeof window.__tcfapi !== "function") {
        return;
      }

      window.__tcfapi("getTCData", 2, (tcData: any, success: boolean) => {
        console.log('in getTCData', success, tcData.eventStatus)
        if (success && tcData.eventStatus === "tcloaded") {
          const hasConsent =
            tcData.gdprApplies &&
            tcData.purpose?.consents?.[1] === true; // Purpose 1: storage access
          console.log(tcData)
          if (hasConsent) {
            console.log("✅ Synced Google CMP consent to CookieConsent");
            localStorage.setItem("CookieConsent", "true");
            document.cookie = "CookieConsent=true; path=/";
            clearInterval(interval); // ✅ Stop polling once synced
          }
        }
      });
    }, 500); // Poll every 500ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
};
