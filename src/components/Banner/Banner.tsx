
import './Banner.css';
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

export const Banner = () => {
    return <div className="Banner">
        <h1>{new Date().getFullYear()} MEMBERSHIPS <Link className="AvailableButton" onClick={() => {
            ReactGA.event({
                category: 'Banner',
                action: 'Clicked membership banner',
                label: `NOW AVAILABLE`
            });
        }} to='/membership'>NOW AVAILABLE</Link></h1>
        <div className="bannerImage"></div>
    </div>
}