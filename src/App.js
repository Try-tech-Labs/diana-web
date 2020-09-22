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
          <div className="col col-md-12 post_card">
            <PostLineCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
