import React, { Fragment, useEffect } from 'react';
import TopNavigation from '../components/TopNavigtion/TopNavigation';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer';
import AllCourses from '../components/AllCourses/AllCourses';

const CoursesPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <TopNavigation />
      <TopPage pagetitle="All Courses " />
      <AllCourses />
      <Footer />
    </Fragment>
  );
};

export default CoursesPage;
