import React from 'react';
import './App.css';
import {SiteHeader, SiteFooter} from './components/site_shared/index'
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
        <SiteFooter />
      </div>           
    </div>
  );
}

export default App;
