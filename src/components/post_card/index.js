import React from 'react';

import './index.css'

function PostLineCard() {
    return (
        <div className="row card_content">
            <div className="col col-12 col-md-4 col-lg-4 post_title">
                <div className="subject">Clients day</div>
                <div className="searches"><strong>+100k</strong> searches</div>
                <div className="last_updated">Updated: September 16, 2020</div>
            </div>
            <div className="col col-12 col-md-2 col-lg-2">
                Vídeos
                </div>
            <div className="col col-12 col-md-2 col-lg-2">
                Tweets
                </div>
            <div className="col col-12 col-md-2 col-lg-2">
                Podcasts
                </div>
            <div className="col col-12 col-md-2 col-lg-2">
                More
                </div>
        </div>
    )
}

export default PostLineCard;