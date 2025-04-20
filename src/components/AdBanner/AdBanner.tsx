import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdBanner = ({ type }: { type: string }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adContainer = adRef.current?.querySelector('ins.adsbygoogle');

    if (adContainer && !adContainer.getAttribute('data-ad-loaded')) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adContainer.setAttribute('data-ad-loaded', 'true');
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  const commonProps = {
    className: 'adsbygoogle',
    'data-ad-client': 'ca-pub-4792294064157934',
  };

  let adSlotProps;

  if (type === 'hori') {
    adSlotProps = {
      style: { display: 'block' },
      'data-ad-slot': '1610045230',
      'data-ad-format': 'auto',
      'data-full-width-responsive': 'true',
    };
  } else if (type === 'small-verti') {
    adSlotProps = {
      style: { display: 'inline-block', width: '450px', height: '90px' },
      'data-ad-slot': '2737759226',
    };
  } else {
    adSlotProps = {
      style: { display: 'block' },
      'data-ad-slot': '5357718558',
      'data-ad-format': 'auto',
      'data-full-width-responsive': 'true',
    };
  }

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }} ref={adRef} key={type}>
      <ins {...commonProps} {...adSlotProps}></ins>
    </div>
  );
};

export const AdBannerWithRefresh = ({ type }: { type: string }) => {
    const location = useLocation();
    const [key, setKey] = useState(() => `${type}-${Date.now()}`);
  
    useEffect(() => {
      setKey(`${type}-${Date.now()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);
  
    return <AdBanner key={key} type={type} />;
  };