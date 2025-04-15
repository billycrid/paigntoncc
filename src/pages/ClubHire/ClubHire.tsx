import React from 'react';
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";

export const ClubHire = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Club Hire - Paignton Cricket Club</title>
            <link href="/news" />
        </Helmet>
        <h3 className="ContentTitle">CLUB HIRE</h3>
        <div className="entry-content">
            <p>Looking for somewhere to hold a party this summer? Do you need a suitable venue for your corporate event? Are you a school looking for a venue to hold your sports day? <strong>Paignton CC could be the answer!</strong></p>
            <p>Our well-appointed clubhouse is nestled in the heart of Paignton with good facilities and easy access to public transport.<br/>Contact club secretary <em>Tracey&nbsp;Knight&nbsp;</em>for further information – <a href="mailto:traceyjknight1972@gmail.com?Subject=Paignton%20CC%20Club%20Hire" target="_top" rel="noopener noreferrer">traceyjknight1972@gmail.com</a></p>
            <p></p>
        </div>
    </div>
}