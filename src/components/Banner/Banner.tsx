
import './Banner.css';
import { Link } from "react-router-dom";

export const Banner = () => {
    return <div className="Banner">
        <h1>{new Date().getFullYear()} MEMBERSHIPS <Link className="AvailableButton" to='/membership'>NOW AVAILABLE</Link></h1>
    </div>
}