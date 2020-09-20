import React from 'react';
import './App.css';
import SiteHeader from './components/header'
import PostLineCard from './components/post_card'

function App() {
  return (
    <div className="App">
      <div className="container-fluid App-body responsive">
        <SiteHeader />
        <div id="posts-content" className="row post_content">
          <PostLineCard />
        </div>
      </div>      
    </div>
  );
}

export default App;
