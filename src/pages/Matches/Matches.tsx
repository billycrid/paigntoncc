import React from 'react';
import '../Shared/Shared.css';
import './Matches.css';
import {Helmet} from "react-helmet";

export const Matches = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Matches - Paignton Cricket Club</title>
            <link href="/news" />
        </Helmet>
        <h3 className="ContentTitle">PAIGNTON RESULTS & MATCHES</h3>
        <div className="entry-content">
            <a href="https://paignton.play-cricket.com/Matches" target="_blank" rel="noreferrer">View Fixtures & Results on Play-Cricket</a>
        </div>
    </div>
}