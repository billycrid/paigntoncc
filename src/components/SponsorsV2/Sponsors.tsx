import { useEffect, useRef } from 'react';
import './Sponsors.css';
import { TSponsor, useSponsors } from '../../hooks/useSponsors.ts';
import ReactGA from 'react-ga';

const SponsorCard = ({ sponsors, horizontal = false, verticle = false, isSmall = false }: { horizontal?: boolean, isSmall?: boolean, verticle?: boolean, sponsors: TSponsor[] }) => {
  const style = horizontal ? {
    flexWrap: 'nowrap'
  } : verticle ? { justifyContent: 'center' } : {}
  return <div className={`SponsorList ${isSmall && 'Small'}`} style={style as any}>
    {sponsors.map((sponsor, idx) => (
      <div key={idx} className="SponsorCardbg" onClick={() => {
        ReactGA.event({
          category: 'Sponsor',
          action: 'Clicked sponsor logo',
          label: sponsor.title || `Sponsor #${idx + 1}` // fallback in case no title
        });
        const newWindow = window.open(sponsor.website, '_blank');
        if (newWindow) {
          newWindow.focus();
        }
      }}>
        <div className='SponsorCard'>
        {sponsor.logo && <><hr />
          <div className="logo">
            <img src={sponsor.logo} width={128} alt={sponsor.title} />
          </div></>}
        <hr />
        <h5 style={{color: 'white'}}>{sponsor.title}</h5>
        </div>
      </div>
    ))}
  </div>
}


const subject = encodeURIComponent("Sponsorship Enquiry – Paignton Cricket Club");
const body = encodeURIComponent("Hi there,\n\nI'm interested in becoming a sponsor for the club. Could you please provide more details?\n\nThanks!");

const mailto = `mailto:paigntoncricketclub@outlook.com?subject=${subject}&body=${body}`;

export const BecomeASponsor = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <a href={mailto}>
        <small>Become a sponsor</small>
      </a>
    </div>
  );
};

export const SponsorsVerticle = () => {
  const { sponsors } = useSponsors();
  const shuffled = [...sponsors].sort(() => Math.random() - 0.5);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force reflow to "kick" animation
    if (scrollRef.current) {
      scrollRef.current.style.animation = 'none';
      void scrollRef.current.offsetHeight; // trigger reflow
      scrollRef.current.style.animation = '';
    }
  }, []);
  return <div>
    <div className="sponsor-sidebar">
      <div className="sponsor-scroll" ref={scrollRef}>
        <SponsorCard sponsors={shuffled} verticle={true} />
      </div>
    </div>
    <BecomeASponsor />
  </div>
}

export const SponsorHorizontal = () => {
  const { sponsors } = useSponsors();
  const shuffled = [...sponsors].sort(() => Math.random() - 0.5);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force reflow to "kick" animation
    if (scrollRef.current) {
      scrollRef.current.style.animation = 'none';
      void scrollRef.current.offsetHeight; // trigger reflow
      scrollRef.current.style.animation = '';
    }
  }, []);
  return <div><div className="sponsor-footer">
    <div className="sponsor-track" ref={scrollRef}>
      <SponsorCard sponsors={shuffled} horizontal={true} isSmall={true} />
    </div>
  </div><BecomeASponsor />
  </div>
}

export const SponsorsPage = () => {
  const { clubSponsors, playerSponsors } = useSponsors();
  return (
    <div>
      <p>Paignton Cricket Club would like to say a huge thank you to all our sponsors for the 2025/2026 season! If you would like to find out how you can get involved with PCC or wish to become a sponsor, please feel free to get in touch <a href={mailto}>here.</a></p>
      <BecomeASponsor />
      <section className="Sponsors">
        <h3 className="ContentTitle">CLUB SPONSORS!</h3>
        <SponsorCard sponsors={clubSponsors} />

        <h3 className="ContentTitle">PLAYER SPONSORS!</h3>
        <SponsorCard sponsors={playerSponsors} />
      </section>
    </div>
  );
}