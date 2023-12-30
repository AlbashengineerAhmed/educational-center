import React, { Fragment, useEffect } from 'react';
import TopNavigation from '../components/TopNavigtion/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <TopNavigation />
      <TopPage pagetitle="Contact "/>
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
