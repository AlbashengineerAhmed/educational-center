import React, { useEffect, Fragment } from 'react';
import TopNavigation from '../components/TopNavigtion/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';

const ServicePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <TopNavigation />
      <TopPage pagetitle="Services" />
      <Services />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default ServicePage;
