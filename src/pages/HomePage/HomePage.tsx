import React from 'react';

import './HomePage.css'

export default function HomePage(){

    return (
        <div id="home-page">
            <h1>DIANA</h1>
            <h3>YOUR NEW WAY TO CONSUME CONTENT</h3>
            <a data-testid="arrow" href="#posts">
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </div>
    )
}