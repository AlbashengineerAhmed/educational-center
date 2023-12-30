import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigtion/TopNavigation';
import TopPage from './TopPage';
import CourseDetails from '../components/CourseDetails/CourseDetails';

const CourseDetailsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <TopNavigation />
      <TopPage pagetitle="Course details" />
      <CourseDetails />
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
