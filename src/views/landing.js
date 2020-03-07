import React from 'react';
import NavBar from '../components/navigation/NavBar';
import Welcome from '../components/welcome/Welcome';
import RecentBlogs from '../components/blog/RecentBlogs';
import Gallery from '../components/gallery/Gallery';
import NewsLetter from '../components/newsletter/NewsLetter';
import AboutBanner from '../components/about/AboutBanner';
import Footer from '../components/footer/Footer';

const Landing = () => (
    <>
      <NavBar />
      <Welcome />
      <RecentBlogs />
      <NewsLetter />
      <Gallery />
      <AboutBanner />
      <Footer />
    </>
)

export default Landing;