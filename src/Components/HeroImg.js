import "./HeroImgStyle.css"

import IntroImg from "../Assets/intro.png"
import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"

import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntoImg" />
        </div>
        <div className="content">
            <h1>Full Stack Developer </h1>
            <p>Hii,</p>
            <h2> I'M  <span>OMKAR PALAV</span></h2>
            <h3>Web Developer.</h3>

            <div>
              <Link to="/project" className="btn">Project</Link>
              <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

            <div className='social-icon mt-3'>
                    <a href="https://www.facebook.com/omkar.palav.102?mibextid=ZbWKwL"><FaFacebook/></a>

                    <a href="https://twitter.com/OmkarP2005"><FaTwitter /></a>

                    <a href="https://www.linkedin.com/in/omkar-palav1610"><FaLinkedin /></a>

                    <a href="https://www.instagram.com/omi_palav_16"><FaInstagram /></a>
                </div>
            
        </div>

        
        
    </div>
  )
}

export default HeroImg