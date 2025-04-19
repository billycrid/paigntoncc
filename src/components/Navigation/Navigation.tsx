import  { useEffect, useState } from 'react';
import './Navigation.css';
import { NavigationConfig } from '../../pages/navigation.config.tsx';
import { Link, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

export const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();
    const currentNav =  NavigationConfig.find(nav => nav.route === location.pathname);
    const currentPathName = () => currentNav ? currentNav.name : NavigationConfig[0].name;

    useEffect(() => {
        setOpen(false);
        ReactGA.pageview(location.pathname + window.location.search);
    }, [location.pathname]);

    const hamburgerClick = () => {
        setOpen(!isOpen)
    }

    return <div className="Navigation" onClick={!isOpen ? () => hamburgerClick() : undefined}>
        <ul>
            <div className="FullNavigation">{NavigationConfig.map((nav, index) => {
                return <li key={`navigation_${nav.name}_${index}`} className={nav.route === location.pathname ? 'active' : undefined}>
                    {nav.externalLink && <a rel="noreferrer" target="_blank" href={nav.externalLink}>{nav.name}</a>}
                    {!nav.externalLink && <Link to={`${nav.route}`}>{nav.name}</Link>}
                </li>
            })}
            </div>
            <div className={`miniDisplay ${isOpen ? 'responsive' : undefined }`}>
                <li style={{display: isOpen ? 'none' : 'block'}} className="responseLi">
                    {currentPathName()}
                </li>
                <div style={{display: isOpen ? 'block' : 'none'}}>
                    {NavigationConfig.map((nav, index) => {
                        return <li key={`navigation_${nav.name}_${index}`} className="responseLi">
                            {nav.externalLink && <a rel="noreferrer" target="_blank" href={nav.externalLink}>{nav.name}</a>}
                            {!nav.externalLink && <Link to={`${nav.route}`}>{nav.name}</Link>}
                        </li>
                    })}
                </div>
            </div>
            <div className="icon" onClick={() => hamburgerClick()}>
                <i className="fa fa-bars fa-2x"></i>
            </div>
        </ul>
    </div>
}