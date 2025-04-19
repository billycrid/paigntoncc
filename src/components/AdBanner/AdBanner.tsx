import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
      adsbygoogle: any[];
    }
}

export const AdBanner = ({ type }: { type: string}) => {
    useEffect(() => {
        try {
            if (typeof window !== "undefined" && window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error("Adsense error", e);
        }
    }, []);

    if (type === 'hori') {
        return (
            <div style={{ marginTop: '2rem', textAlign: 'center' }} key={type}>
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-4792294064157934"
                    data-ad-slot="1610045230"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        );
    } else if (type === 'small-verti') {
        return <div key={type}><ins className="adsbygoogle"
        style={{display:'inline-block',width:'450px',height:'90px'}}
        data-ad-client="ca-pub-4792294064157934"
        data-ad-slot="2737759226"></ins>
    </div>
    } else {
        return <div key={type}><ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-4792294064157934"
            data-ad-slot="5357718558"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
    }
};

export const AdBannerWithRefresh = ({ type }: { type: string}) => {
    const location = useLocation();

    useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                const ads = document.getElementsByClassName("adsbygoogle");
                for (let i = 0; i < ads.length; i++) {
                    ads[i].innerHTML = ''; // clear previous ad
                }
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.warn('Ad refresh error:', e);
        }
    }, [location.pathname]);

    return <AdBanner type={type} />;
};