import React, { useEffect, Fragment } from 'react';
import TopNavigation from '../components/TopNavigtion/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer';
import AllProject from '../components/AllProject/AllProject';

const ProjectPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <TopNavigation />
      <TopPage pagetitle="All Project" />
      <AllProject />
      <Footer />
    </Fragment>
  );
};

export default ProjectPage;
