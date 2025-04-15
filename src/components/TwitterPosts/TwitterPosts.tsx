import React from 'react';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

export const TwitterPosts = () => {
    return <div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="PaigntonCricket"
            options={{height: 700, avatar: 'hidden'}}
            noBorders={true}
            placeholder={'Fetching tweets...'}
        />
    </div>
}