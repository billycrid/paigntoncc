
import { Banner } from '../../components/Banner/Banner.tsx';
import './Home.css';
import { Helmet } from "react-helmet";
import { TwitterPosts } from '../../components/TwitterPosts/TwitterPosts.tsx';
import { FacebookPosts } from '../../components/FacebookPosts/FacebookPosts.tsx';
import { Posts } from '../../components/Posts/Posts.tsx';
import { AdBanner } from '../../components/AdBanner/AdBanner.tsx';
import { SponsorsVerticle } from '../../components/SponsorsV2/Sponsors.tsx';
import ChairmansReport2024 from './reports/2024.tsx';
import useCookieConsent from '../../hooks/useCookieConsent.ts';
import { FantasyLeaguePromo } from '../../components/Fantasy/Fantasy.tsx';

export const GoFundMeWidget = () => {
  return (
    <iframe src="https://www.gofundme.com/f/nets-replacement-at-paignton-cricket-club/widget/large?sharesheet=fundraiser sidebar&attribution_id=sl:9d13a37e-94c0-49c1-89a2-5bd771540d6a" frameBorder="0" width="450" height="550" title="Donation">
</iframe>
  );
};


export const Home = () => {
    const hasConsent = useCookieConsent();
    return <div style={{ marginTop: '22px' }} className='inlineHomeContent'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Paignton Cricket Club</title>
            <link href="/" />
        </Helmet>
        <Banner />
        <br />
        <div className="flex-container-home">
            <div className="flex-item-left" style={{textAlign: 'justify'}}>
                <Posts />
                <div>
                    <div className="TitleMain">
                        <h4>
                            <a href="/fantasy">
                                Fantasy League!
                            </a>
                        </h4>
                    </div>
                    <br />
                    <FantasyLeaguePromo />
                </div>
                <div>
                    <div className="TitleMain">
                        <h4>
                            <a href="/news">
                                CHAIRMAN’S REPORT – 2024
                            </a>
                        </h4>
                    </div>
                    <br />
                    <ChairmansReport2024 />
                    <div className='continueReading'>
                        <a href="/PDFS/PCC-Chairmans-Report-2024.pdf" target="_blank">Continue reading...</a>
                    </div>
                </div>
                <br />
                <div>
                    <div className="TitleMain ">
                        <h4>
                            <a href="https://www.youtube.com/channel/UCcMNqala5hzRAeCXCfzhnmg?sub_confirmation=1">NOW ON YOUTUBE!</a>
                        </h4>
                    </div>
                    <div className="entry-content">
                        {hasConsent && <iframe width="100%" height="450" src="https://www.youtube.com/embed/videoseries?list=PLkHcL9kSQF3jH6vyn4tsUan79LlIMvxhq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                        <p>Paignton Cricket Club has recently partnered with NV Play to ensure as many games as possible are live streamed. Below, is a playlist containing all the recent Paignton Cricket Club Live streamed games. These games will include the ones streamed at home by us, as well as other venues around the League.</p>
                    </div>
                </div>
            </div>
            <div className="flex-item-right rightSection">
                {hasConsent && <><div>
                    <div className="Title">
                        <h4>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/paignontcc">
                                JOIN US ON FACEBOOK!
                            </a>
                        </h4>
                    </div>
                    <div>
                        <FacebookPosts />
                        {hasConsent && <><br/><AdBanner type={'small-verti'} /></>}
                    </div>
                </div>
                <br />
                <div>
                    <div className="Title">
                        <h4>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/paigntoncricket?lang=en-GB">
                                FOLLOW US ON TWITTER!
                            </a>
                        </h4>
                    </div>
                    <div>
                        <TwitterPosts />
                    </div>
                </div>
                <br /></>}
                <div>
                    <div className="Title">
                        <h4>
                            {/* eslint-disable-next-line */}
                            <a rel="noreferrer" href="#">
                                SPONSORS!
                            </a>
                        </h4>
                    </div>
                    <div>
                        <SponsorsVerticle />
                        {hasConsent && <><br/><AdBanner type={'verti'} /><br/></>}
                    </div>
                </div>
                {hasConsent && <div>
                    <div className="Title">
                        <h4>
                            {/* eslint-disable-next-line */}
                            <a rel="noreferrer" href="#">
                                DONATE!
                            </a>
                        </h4>
                    </div>
                    <GoFundMeWidget />
                </div>}
            </div>
        </div>
    </div>
}