import React from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CoursesPage from '../pages/CoursesPage';
import ProjectPage from '../pages/ProjectPage';
import ServicePage from '../pages/ServicePage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/AllCourses" element={<CoursesPage />} />
      <Route path="/AllProject" element={<ProjectPage />} />
      <Route path="/AllServices" element={<ServicePage />} />
      <Route path="/ProjectDetailsPage" element={<ProjectDetailsPage />} />
      <Route path="/CourseDetailsPage" element={<CourseDetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
