import '../Shared/Shared.css';
import { Helmet } from "react-helmet";
import { Juniors } from "../../components/Juniors/Juniors.tsx";
import { Seniors } from "../../components/Seniors/Seniors.tsx";

export const Teams = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Teams - Paignton Cricket Club</title>
            <link href="/news" />
        </Helmet>
        <div>
            <div>
                <h3 className="ContentTitle">SENIOR TEAMS!</h3>
                <div className="entry-content">
                    <Seniors />
                </div>
            </div>
            <div>
                <h3 className="ContentTitle">1ST TEAM!</h3>
                <img alt="PCC 1st Team 2023" style={{ width: '100%', padding: '16px' }} src={'/images/teams/1st-2023.png'} />
                <br />
                <h3 className="ContentTitle">2ND TEAM!</h3>
                <img alt="PCC 2nd Team 2023" style={{ width: '100%', padding: '16px' }} src={'/images/teams/2nd-2023.png'} />
                <br />
                <h3 className="ContentTitle">3RD TEAM!</h3>
                <img alt="PCC 3rd Team 2023" style={{ width: '100%', padding: '16px' }} src={'/images/teams/3rd-2023.png'} />
                <br />
                <h3 className="ContentTitle">4TH TEAM!</h3>
                <img alt="PCC 4th Team 2023" style={{ width: '100%', padding: '16px' }} src={'/images/teams/4th-2023.png'} />
            </div>
            <div>

                <h3 className="ContentTitle">JUNIOR TEAMS!</h3>
                <div className="entry-content">
                    <Juniors />
                </div>
            </div>
        </div>
    </div>
}