
import '../App.css';
import { HeaderImage } from '../components/HeaderImage/HeaderImage.tsx';
import { Navigation } from '../components/Navigation/Navigation.tsx';
import { MiniAbout } from '../pages/About/MiniAbout.tsx';
import { OnesMap } from '../components/Locations/OnesMap.tsx';
import { ThreesMap } from '../components/Locations/ThreesMap.tsx';
// import CookieConsent from "react-cookie-consent";
import { AdBannerWithRefresh } from '../components/AdBanner/AdBanner.tsx';
import { SponsorHorizontal } from '../components/SponsorsV2/Sponsors.tsx';

export const Layout = ({ ...props }) => {
    return <div className="Wrapper">
    <header className="Header">
      <HeaderImage />
      <Navigation />
    </header>
    <div className="Content">
        {props.children}
    </div>
    {/* <CookieConsent buttonText="I Understand">We use necessary cookies to make our site work. We also use cookies set by other sites to help deliver content from their services. By navigating and using this site, you agree to the Cookies we set and use.</CookieConsent> */}
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
        <hr/>
        <SponsorHorizontal />
        <hr/>
        <AdBannerWithRefresh type={'hori'} />
      </div>
    </footer>
</div>
}