import React from "react";
import './Sponsers.css';
import hoburneSponser from '../../images/hoburne-sponsor.png';
import eitwSponsor from '../../images/eitw-sponsor.png';
import marinersSponsor from '../../images/mariners-sponsor.png'

export const Sponsers = ({ isSmall }) => {
    const sponsers = [{
        team: '1st',
        name: 'Hoburne Devon',
        link: 'https://www.facebook.com/hoburnedevonbayofficial/',
        image: hoburneSponser,
        height: '200px',
        width: '80px'
    }, {
        team: '2nd',
        name: 'East in the West',
        link: 'https://eastinthewest.co.uk/',
        image: eitwSponsor,
        height: '90px',
        width: '80px'
    }, {
        team: '3rd',
        name: 'Mariners Fish and Chips Paignton',
        link: 'https://www.marinersfishandchips.co.uk/',
        image: marinersSponsor,
        height: '130px',
        width: '80px'
    }]
    return <div className={`sponsers ${isSmall && 'smallSponsers'}`}>
        {sponsers.map((spon) => {
            const title = `Thanks ${spon.name} sponsoring the ${spon.team} team`;
            return <div className="sponsor">
                <a target="_blank" rel="noreferrer" href={spon.link}>
                    <img src={spon.image} width={isSmall ? undefined : '100%'} height={isSmall ? '100%' : spon.height} title={title} alt={title} />
                </a>
                <hr/>
            </div>
        })}
    </div>;
}