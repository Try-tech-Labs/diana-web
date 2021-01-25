import React from 'react';

import './styles.css';

export default function NavigationBar(){
    return (
        <div className="header">
            <h1>DIANA</h1>
            <div className="navigation_menu">
                <a href="/">Home</a>
                <a href="/">News letter</a>
                <a href="/">About</a>
            </div>
        </div>
    )
}