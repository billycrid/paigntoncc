import { useState, useEffect } from "react";

const getCookieConsentValue = () => {
  const localValue = localStorage.getItem("CookieConsent");
  if (localValue === "true") return true;
  if (localValue === "false") return false;

  const match = document.cookie.match(/(?:^|; )CookieConsent=([^;]*)/);
  return match ? match[1] === "true" : false;
};

const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(getCookieConsentValue());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentConsent = getCookieConsentValue();
      setHasConsent((prev) => {
        if (prev !== currentConsent) {
          return currentConsent;
        }
        return prev;
      });
    }, 500); // Check every 0.5s

    return () => clearInterval(interval);
  }, []);

  return hasConsent;
};

export default useCookieConsent;
