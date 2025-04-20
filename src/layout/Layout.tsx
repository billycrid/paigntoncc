
import '../App.css';
import { HeaderImage } from '../components/HeaderImage/HeaderImage.tsx';
import { Navigation } from '../components/Navigation/Navigation.tsx';
import { MiniAbout } from '../pages/About/MiniAbout.tsx';
import { OnesMap } from '../components/Locations/OnesMap.tsx';
import { ThreesMap } from '../components/Locations/ThreesMap.tsx';
import CookieConsent from "react-cookie-consent";
import { AdBannerWithRefresh } from '../components/AdBanner/AdBanner.tsx';
import { SponsorHorizontal } from '../components/SponsorsV2/Sponsors.tsx';
import ReactGA from 'react-ga';
import useCookieConsent from '../hooks/useCookieConsent.ts';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';

export const CookieBanner = () => {
  const hasConsent = useCookieConsent();
  return <>
    {!hasConsent && <CookieConsent
      location="bottom"
      buttonText="Accept All Cookies"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="CookieConsent"
      style={{ background: "#2B373B", fontSize: "14px" }}
      buttonStyle={{ background: "#4CAF50", color: "#fff", fontSize: "14px" }}
      declineButtonStyle={{ background: "#ccc", color: "#000", fontSize: "14px" }}
      onAccept={() => {
        ReactGA.initialize(TRACKING_ID);
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }}
      onDecline={() => {
        // Optionally disable analytics or iframe loading
        localStorage.removeItem("CookieConsent");
        document.cookie = "CookieConsent=; path=/; max-age=0";
      }}
    >
      We use cookies to ensure basic site functionality and to enhance your experience. We also embed content from third-party services like YouTube, Facebook, Twitter, and GoFundMe, which may set their own cookies. You can accept or decline these cookies.
      <a href="/privacy" style={{ color: "#FFD700", marginLeft: "8px" }}>
        Learn more
      </a>
    </CookieConsent>
    }
  </>
}

export const Layout = ({ ...props }) => {
  const hasConsent = useCookieConsent();
  return <div className="Wrapper">
    <header className="Header">
      <HeaderImage />
      <Navigation />
    </header>
    <div className="Content">
      {props.children}
    </div>
    <CookieBanner />
    <footer className="Footer">
      <div className="flex-container">
        <div className="flex-item">
          <MiniAbout />
        </div>
        <div className="flex-item">
          <OnesMap />
        </div>
        <div className="flex-item">
          <ThreesMap />
        </div>
      </div>
      <div className="site-info">
        Paignton Cricket Club
        <hr />
        <SponsorHorizontal />
        {hasConsent && <><hr /><AdBannerWithRefresh type={'hori'} /></>}
      </div>
    </footer>
  </div>
}