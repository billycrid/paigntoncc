import { useEffect } from "react";

export const useSyncGoogleConsent = () => {
  useEffect(() => {
    const consentButtonSelector = ".fc-button.fc-cta-consent";

    const onConsentClick = () => {
      console.log("✅ User clicked Google Consent button");

      // Your local logic
      localStorage.setItem("CookieConsent", "true");
      document.cookie = "CookieConsent=true; path=/";
    };

    const interval = setInterval(() => {
      const consentBtn = document.querySelector(consentButtonSelector);
      if (consentBtn) {
        consentBtn.addEventListener("click", onConsentClick);
        console.log("🔍 Hooked into Google consent button");
        clearInterval(interval); // stop polling once attached
      }
    }, 300); // check every 300ms

    return () => {
      // Clean up if component unmounts
      const consentBtn = document.querySelector(consentButtonSelector);
      if (consentBtn) {
        consentBtn.removeEventListener("click", onConsentClick);
      }
      clearInterval(interval);
    };
  }, []);
};
