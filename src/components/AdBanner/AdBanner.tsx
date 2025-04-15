import React, { useEffect } from 'react';

export const AdBanner = ({ type }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) { }
    }, []);

    if (type === 'hori') {
        return (
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-4792294064157934"
                    data-ad-slot="1610045230"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        );
    } else {
        return <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-4792294064157934"
            data-ad-slot="5357718558"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    }
};
