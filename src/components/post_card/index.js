import React from 'react';

import './index.css'

function PostLineCard() {
    return (
        <div className="col col-md-12 post_card">
            <div className="row card_content">
                <div className="col col-4 post_title">
                    <div className="subject">Dia do Cliente</div>
                    <div className="searches"><strong>+100mil</strong> pesquisas</div>
                    <div className="last_updated">Atualizado em 16 de setembro de 2020</div>
                </div>
                <div className="col col-2">
                    Videos
                </div>
                <div className="col col-2">
                    Tweets
                </div>
                <div className="col col-2">
                    Podcasts
                </div>
                <div className="col col-2">
                    Mais
                </div>
            </div>
        </div>
    )
}

export default PostLineCard;