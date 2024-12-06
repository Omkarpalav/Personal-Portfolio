import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import ProjectInfo from '../Components/ProjectInfo'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <ProjectInfo />
      <Footer />
    </div>
    
  )
}

export default Project;