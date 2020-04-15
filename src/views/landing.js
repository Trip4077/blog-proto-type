import React, { useState, useEffect } from 'react';

import NavBar from '../components/navigation/NavBar';
import Welcome from '../components/landing/welcome/Welcome';
import RecentBlogs from '../components/landing/blog/RecentBlogs';
import Gallery from '../components/landing/gallery/Gallery';
import NewsLetter from '../components/landing/newsletter/NewsLetter';
import AboutBanner from '../components/landing/about/AboutBanner';
import Footer from '../components/landing/footer/Footer';

import axios from 'axios';

const Landing = () => {
  const [ blogs, setBlogs ] = useState( [] );

  useEffect(() => {
    axios.get( 'http://localhost:5000/api/blogs/' )
         .then( res => setBlogs( res.data ) )
         .catch( err => console.log(err) );
  }, []);

  return(
          <>
            <NavBar />
            <Welcome />
            <RecentBlogs blogs={ blogs.slice( 0, 5 ) } />
            <NewsLetter />
            <Gallery />
            <AboutBanner />
            <Footer />
          </>
        )
}

export default Landing;