import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import AboutInfo from '../Components/AboutInfo'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer"/>
      <AboutInfo />
      <Footer />
    </div>
  )
}

export default About