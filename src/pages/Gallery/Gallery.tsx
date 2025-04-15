import React from 'react';
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";

export const Gallery = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Gallery - Paignton Cricket Club</title>
            <link href="/gallery" />
        </Helmet>
        <h3 className="ContentTitle">PAIGNTON CRICKET CLUB GALLERY!</h3>
        <div className="entry-content">
            <p>A collection of pictures taken over the years.</p>
            <iframe
                placeholder='Paignton Cricket Club Gallery...'
                title="Paignton Cricket Club Gallery"
                src="https://drive.google.com/embeddedfolderview?id=1_Z58rRnQqMVwdKilvZHQxrU6sVx4uadV#grid" 
                style={{width: '100%', height: '600px', border: '0'}}
            />
        </div>
    </div>
}