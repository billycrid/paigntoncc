// PageTracker.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';


const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';

ReactGA.initialize(TRACKING_ID);

export const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null; // no UI needed
};