import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import SkillsInfo from '../Components/SkillsInfo'


const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SKILLS." text="This are my Technical Sckills" />
      <SkillsInfo />
      <Footer />
    </div>
    
  )
}

export default Skills