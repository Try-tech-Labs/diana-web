import React from 'react';

import '../../styles/site_shared/index.css'
import SearchBar from '../search_bar'
import SideMenu from '../side_menu'

export const SiteFooter = () => {
    return (
        <div className="footer">
            <p>&copy; 2020 TryTech Lab. Made with 💜</p>
        </div>
    )
}


export const SiteHeader = () => {
    return (
        <div>
            <div className="header_elements">
                <SideMenu />
                <div className="logo">diana</div>
                <SearchBar />
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
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
    )
}