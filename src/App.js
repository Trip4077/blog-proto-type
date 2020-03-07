import React from 'react';
import NavBar from './components/navigation/NavBar';
import Welcome from './components/welcome/Welcome';
import RecentBlogs from './components/blog/RecentBlogs';
import NewsLetter from './components/newsletter/NewsLetter';
import Gallery from './components/gallery/Gallery';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <RecentBlogs />
      <Gallery />
      <NewsLetter />
    </div>
  );
}

export default App;
