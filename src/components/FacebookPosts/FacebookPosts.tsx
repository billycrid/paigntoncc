import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export const FacebookPosts = () => {
    return <div>
        <FacebookProvider appId="553242433089128">
            <Page href="https://www.facebook.com/paignontcc/" tabs="timeline" />
        </FacebookProvider>   
        {/* <iframe
            title="Paignton CC Facebook Feed"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpaignontcc&tabs=timeline&width=410&height=50&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
             style={{
                 border:'none',
                 overflow:'hidden',
                 width: '100%',
                 minHeight: '500px'
            }} 
             scrolling="no" frameBorder="0" allowFullScreen={true}
             allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
             loading="lazy"
             ></iframe> */}
    </div>
}