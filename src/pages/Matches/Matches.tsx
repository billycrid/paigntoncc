import React from 'react';
import '../Shared/Shared.css';
import './Matches.css';
import {Helmet} from "react-helmet";
import { Results } from '../../components/Results/Results.tsx';
import { Leagues } from '../../components/Leagues/Leagues.tsx';

export const Matches = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Matches - Paignton Cricket Club</title>
            <link href="/news" />
        </Helmet>
        <h3 className="ContentTitle">PAIGNTON RESULTS & MATCHES</h3>
        <div className="entry-content">
            <div className="matches flex-container">
                <div className="flex-item-left-mid">
                    <Results />
                </div>
                <div className="flex-item-right-mid">
                    <Leagues />
                </div>
            </div>
        </div>
    </div>
}