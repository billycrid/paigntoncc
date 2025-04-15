import React from "react";
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";
import { Juniors } from "../../components/Juniors/Juniors.tsx";
import { Seniors } from "../../components/Seniors/Seniors.tsx";

export const Teams = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Teams - Paignton Cricket Club</title>
            <link href="/news" />
        </Helmet>
        <h3 className="ContentTitle">SENIOR TEAMS!</h3>
        <div className="entry-content">
            <Seniors />
        </div>
        <h3 className="ContentTitle">JUNIOR TEAMS!</h3>
        <div className="entry-content">
            <Juniors />
        </div>
    </div>
}