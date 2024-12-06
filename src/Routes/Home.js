import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'

import AboutInfo from '../Components/AboutInfo'
import ProjectInfo from '../Components/ProjectInfo'
import ContactInfo from '../Components/ContactInfo'
import SkillsInfo from '../Components/SkillsInfo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutInfo />
      <SkillsInfo />
      <ProjectInfo />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default Home