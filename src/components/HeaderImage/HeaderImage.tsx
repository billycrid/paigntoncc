import React from 'react';
import './HeaderImage.css';
import logo from '../../images/logo.png';

export const HeaderImage = () => {
    return <div className="HeaderImage">
        <div className="SiteLogo">
            <a href="/" title="Paignton Cricket Club" rel="home">
                <img src={logo} alt="Paignton Cricket Club" />
            </a>
        </div>
        <div className="Socials" aria-hidden={true}>
            <ul className="social-media">
                <li><a href="https://www.twitter.com/PaigntonCricket/" rel="noreferrer" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
                <li><a href="https://www.facebook.com/paignontcc/" rel="noreferrer" target="_blank"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li><a href="https://www.instagram.com/paigntoncricket/" rel="noreferrer" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
                <li><a href="https://www.instagram.com/pcc.ladies" rel="noreferrer" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCcMNqala5hzRAeCXCfzhnmg?sub_confirmation=1" rel="noreferrer" target="_blank"><i className="fa fa-youtube fa-2x"></i></a></li>
	        </ul>
        </div>
    </div>
}