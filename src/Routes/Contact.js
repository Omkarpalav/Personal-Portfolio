import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import ContactInfo from '../Components/ContactInfo'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="CONTACT" text="Lets have a chat" />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default Contact