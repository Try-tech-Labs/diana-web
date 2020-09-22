import React from 'react';

import './index.css'
import SearchBar from '../search_bar'
import SideMenu from '../side_menu'

function SiteHeader() {
    return (
        <div className="row">
            <div className="col col-md-12">
                <div className="header_elements row">
                    <SideMenu />
                    <div className="logo col col-sm-1 col-md-2">d.i.a.n.a</div>
                    <SearchBar />
                </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide row" data-ride="carousel">
                    <div className="carousel-inner carousel_image">
                        <div className="carousel-item active" alt="man-reading-news">
                            <div className="carrousel-image">
                            </div>
                            <div className="image-overlay">
                                <span className="overlay-text">
                                    Your news reading experience <span>newer</span> and <strong>better!</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteHeader;