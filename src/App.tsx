import React from 'react';

import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className="App">
      <div className="container-fluid App-body responsive">
        <HomePage />
        <PostsPage />
      </div>           
    </div>
  );
}

export default App;
