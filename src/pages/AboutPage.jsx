import React, { Fragment, useEffect } from 'react';
import TopNavigation from '../components/TopNavigtion/TopNavigation';
import TopPage from './TopPage';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import AboutDescreption from '../components/AboutDescreption/AboutDescreption';

const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <TopNavigation />
      <TopPage pagetitle="About" />
      <About />
      <AboutDescreption />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
