import  { useEffect, useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import useCookieConsent from '../../hooks/useCookieConsent';
import { AcceptCookiesModal } from '../AcceptCookies/AcceptCookies';

export const TwitterPosts = () => {
  const [showFallback, setShowFallback] = useState(false);
  const hasConsent = useCookieConsent();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 2000); // Wait 5s then show fallback

    return () => clearTimeout(timer);
  }, []);

  if (!hasConsent) {
    return (
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <p>This Twitter feed requires cookies to load.</p>
        <span>
          Please <AcceptCookiesModal inline={true} /> to view our latest posts.
        </span>
      </div>
    );
  }

  return (
    <div>
      {!showFallback ? (
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="PaigntonCricket"
          options={{ height: 700 }}
          noBorders={true}
          placeholder={'Fetching tweets...'}
        />
      ) : (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <p>Unable to load Twitter feed.</p>
          <a
            href="https://twitter.com/PaigntonCricket"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1DA1F2', fontWeight: 'bold' }}
          >
            View @PaigntonCricket on Twitter
          </a>
        </div>
      )}
    </div>
  );
};
