import { useEffect, useRef, useState } from 'react';
import './FacebookPosts.css';
import useCookieConsent from '../../hooks/useCookieConsent';
import { AcceptCookiesModal } from '../AcceptCookies/AcceptCookies';

export const FacebookPosts = () => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const hasConsent = useCookieConsent();

  useEffect(() => {
    // Set timeout to detect iframe failure
    timeoutRef.current = window.setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 1000); // You can adjust this timeout duration

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [loaded]);

  
  if (!hasConsent) {
    return (
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <p>This Facebook feed requires cookies to load.</p>
        <span>
          Please <AcceptCookiesModal inline={true} /> to view our latest posts.
        </span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="facebook-feed"
        style={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: failed ? '80px' : '500px',
        }}
      >
        {!failed && (
          <iframe
            title="Facebook Page Feed"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpaignontcc&tabs=timeline&width=420&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&small_header=true&appId=553242433089128"
            width="500"
            height="700"
            style={{ border: 'none', overflow: 'hidden' }}
            allowFullScreen={true}
            onLoad={() => {
              setLoaded(true);
              if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
              }
            }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        )}

        {failed && (
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <p>Unable to load the Facebook feed. You can view the posts directly on Facebook:</p>
            <a
              href="https://www.facebook.com/paignontcc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1877f2', fontWeight: 'bold' }}
            >
              Visit Paignton Cricket Club on Facebook
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
