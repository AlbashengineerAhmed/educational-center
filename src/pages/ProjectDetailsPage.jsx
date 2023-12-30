import React from 'react'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer'
import ProjectDetails from './../components/ProjectDetails/ProjectDetails';

export default function ProjectDetailsPage() {
  return (
    <>
      <TopNavigation/>
      <TopPage/>
      <ProjectDetails/>
      <Footer/>
    </>
  )
}
