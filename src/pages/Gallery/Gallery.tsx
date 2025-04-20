
import { AcceptCookiesModal } from '../../components/AcceptCookies/AcceptCookies';
import useCookieConsent from '../../hooks/useCookieConsent';
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";

export const Gallery = () => {
    const hasConsent = useCookieConsent();
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Gallery - Paignton Cricket Club</title>
            <link href="/gallery" />
        </Helmet>
        <h3 className="ContentTitle">PAIGNTON CRICKET CLUB GALLERY!</h3>
        <div className="entry-content">
            {!hasConsent && <div style={{ textAlign: "center", padding: "1rem" }}>
            <p>This Gallery requires cookies to load.</p>
            <span>
              Please <AcceptCookiesModal inline={true} /> to view our collection of pictures.
            </span>
          </div>}
            {hasConsent && <><p>A collection of pictures taken over the years.</p><iframe
                title="Paignton Cricket Club Gallery"
                src="https://drive.google.com/embeddedfolderview?id=1_Z58rRnQqMVwdKilvZHQxrU6sVx4uadV#grid" 
                style={{width: '100%', height: '600px', border: '0'}}
            /></>}
        </div>
    </div>
}