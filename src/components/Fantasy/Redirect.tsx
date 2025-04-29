
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

export const FantasyRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {        
    ReactGA.event({
        category: 'Fantasy',
        action: 'Clicked fantasy link'
    });
    window.location.href = 'https://paignton.fantasyclubcricket.co.uk/team-standings';
  }, [navigate]);

  return (
    <div>
      <p>Redirecting you to our Fantasy Cricket page...</p>
    </div>
  );
};
