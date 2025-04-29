
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

export const FantasyRedirect = () => {
  const navigate = useNavigate();
  const url = 'https://paignton.fantasyclubcricket.co.uk/team-standings';
  useEffect(() => {        
    ReactGA.event({
        category: 'Fantasy',
        action: 'Clicked fantasy link'
    });
    window.location.href = url;
  }, [navigate]);

  return (
    <div>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Fantasy - Paignton Cricket Club</title>
            <link href="/fantasy" />
        </Helmet>
        <br/>
        <br/>
      <p>Redirecting you to our Fantasy Cricket page...</p>
      <a href={url} style={{textAlign: 'center'}} ><h4>If it fails, or is taking a while please click here to be redirected</h4></a>
    </div>
  );
};
