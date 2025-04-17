import React from 'react';
import './Sponsors.css';
import { useSponsors } from '../../hooks/useSponsors.ts';

const SponsorCard = ({ sponsors, horizontal = false, verticle = false, isSmall = false }) => {
  const style = horizontal ? {
    flexWrap: 'nowrap'
  } : verticle ? { justifyContent: 'center' } : {}
  return <div className={`SponsorList ${isSmall && 'Small'}`} style={style}>
    {sponsors.map((sponsor, idx) => (
      <div key={idx} className="SponsorCard" onClick={() => {
        window.open(sponsor.website, '_blank').focus();
      }}>
        {sponsor.logo && <><hr />
          <div className="logo">
            <img src={sponsor.logo} width={128} alt={sponsor.title} />
          </div></>}
        <hr />
        <h5>{sponsor.title}</h5>
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
  return <div>
    <div className="sponsor-sidebar">
      <div className="sponsor-scroll">
        <SponsorCard sponsors={shuffled} verticle={true} />
      </div>
    </div>
    <BecomeASponsor />
  </div>
}

export const SponsorHorizontal = () => {
  const { sponsors } = useSponsors();
  const shuffled = [...sponsors].sort(() => Math.random() - 0.5);
  return <div><div className="sponsor-footer">
    <div className="sponsor-track">
      <SponsorCard sponsors={shuffled} horizontal={true} isSmall={true} />
    </div>
  </div><BecomeASponsor />
  </div>
}

export const SponsorsPage = () => {
  const { clubSponsors, playerSponsors } = useSponsors();
  return (
    <div>
      <p>Paignton Cricket Club would like to say a huge thank you to all our sponsors for the 2025/2026 season! If you would like to find out how you can get involved with PCC or if you wish to <BecomeASponsor />, please feel free to get in touch <a href={mailto}>here.</a></p>
      <section className="Sponsors">
        <h3 className="ContentTitle">CLUB SPONSORS!</h3>
        <SponsorCard sponsors={clubSponsors} />

        <h3 className="ContentTitle">PLAYER SPONSORS!</h3>
        <SponsorCard sponsors={playerSponsors} />
      </section>
    </div>
  );
}