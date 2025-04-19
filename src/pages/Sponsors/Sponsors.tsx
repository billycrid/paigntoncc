
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";
import {SponsorsPage as SponsorsComponent} from '../../components/SponsorsV2/Sponsors.tsx'

export const Sponsors = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Sponsors - Paignton Cricket Club</title>
            <link href="/gallery" />
        </Helmet>
        <h3 className="ContentTitle">PAIGNTON CRICKET CLUB SPONSORS!</h3>
        <div className="entry-content">
            <SponsorsComponent />
        </div>
    </div>
}