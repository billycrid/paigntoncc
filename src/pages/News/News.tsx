import React from 'react';
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga';
import { Posts } from '../../components/Posts/Posts.tsx';

export const News = () => {
    const readNews = (name) => {
        ReactGA.event({
            category: 'Read PDF',
            action: name
        });
    }
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>News - Paignton Cricket Club</title>
            <link href="/news" />
        </Helmet>
        <Posts><h3 className="ContentTitle">PAIGNTON NEWS POSTS!</h3></Posts>
        <h3 className="ContentTitle">PAIGNTON NEWS & REPORTS!</h3>
        <div className="entry-content">
            <ul>
                <li><a onClick={() => readNews('PCC-Chairmans-Report-2023.pdf')} href="/PDFS/PCC-Chairmans-Report-2023.pdf" target="_blank">CHAIRMAN’S REPORT – 2023</a></li>
                <li><a onClick={() => readNews('PCC-Awards-Night-2022.pdf')} href="/PDFS/PCC-Awards-Night-2022.pdf" target="_blank">AWARDS NIGHT – 2022</a></li>
                <li><a onClick={() => readNews('PCC-Chairmans-Report-2021.pdf')} href="/PDFS/PCC-Chairmans-Report-2021.pdf" target="_blank">CHAIRMAN’S REPORT – SPRING 2021</a></li>
                <li><a onClick={() => readNews('PCC-Newsletter-Winter-2019-21.12.19.pdf')} href="/PDFS/PCC-Newsletter-Winter-2019-21.12.19.pdf" target="_blank">PCC NEWSLETTER – WINTER 2019</a></li>
                <li><a onClick={() => readNews('PCC-Newsletter-Winter-2018.pdf')} href="/PDFS/PCC-Newsletter-Winter-2018.pdf" target="_blank">PCC NEWSLETTER – WINTER 2018</a></li>
                <li><a onClick={() => readNews('PCC-Newsletter-May2018.pdf')} href="/PDFS/PCC-Newsletter-May2018.pdf" target="_blank">PCC NEWSLETTER – MAY 2018</a></li>
                <li><a onClick={() => readNews('PCC-Newsletter-Winter-2017.pdf')} href="/PDFS/PCC-Newsletter-Winter-2017.pdf" target="_blank">PCC NEWSLETTER – WINTER 2017</a></li>
                <li><a onClick={() => readNews('PCC-Newsletter-AprilMay-2017.pdf')} href="/PDFS/PCC-Newsletter-AprilMay-2017.pdf" target="_blank">PCC NEWSLETTER – APRIL 2017</a></li>
                <li><a onClick={() => readNews('PCC-Newsletter-May-2016.pdf')} href="/PDFS/PCC-Newsletter-May-2016.pdf" target="_blank">PCC NEWSLETTER – MAY 2016</a></li>
            </ul>
        </div>
    </div>
}