import React from 'react';

import '../styles/pages/PostsPage.css';

import NavigationBar from '../components/NavigationBar';

export default function PostsPage(){
    return <div data-testid='posts-page' id='posts' className="posts">
        <div className="background"></div>
        <NavigationBar />
    </div>
}