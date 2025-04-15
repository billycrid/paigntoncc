import React from 'react';
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";

export const Contact = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Contact - Paignton Cricket Club</title>
            <link href="/news" />
        </Helmet>
        <h3 className="ContentTitle">CONTACT PAIGNTON CRICKET CLUB!</h3>
        <div className="entry-content">
        <p>Queens Park <br/> Queens Road <br/> Paignton <br/> Devon <br/> TQ4 6AT <br/> Telephone: 01803 557715 <br/> Email: <a href="mailto:paigntoncricketclub@gmail.com?Subject=Paignton%20CC%20Contact%20Us" target="_top">paigntoncricketclub@gmail.com</a> <br/></p>
        <iframe 
            width="100%"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            height="300px"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3826048017886!2d-3.5648798844248675!3d50.43397369643321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d1a9e5a56a77f%3A0x8ec765b59abe74b5!2sPaignton%20Rugby%20and%20cricket%20club!5e0!3m2!1sen!2suk!4v1650920868445!5m2!1sen!2suk"
        />
    </div>
    </div>
}