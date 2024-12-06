import React from 'react'
import "./FooterStyle.css"

import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
       <p>Copyright © <span>2024</span> Made By Omkar Palav</p>
        {/* <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}} />
                    123-456-789
                    </h4>
                </div>
                <div className='mail'>
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}} />
                    omkarpalav@1610gmail.com
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About The Company.</h4>
                <p>This is me omkar palav. I enjoy discussing new project and design challenges.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:"#fff" ,marginRight:"1rem"}} />

                    <FaTwitter size={30} style={{color:"#fff" ,marginRight:"1rem"}} />

                    <FaLinkedin size={30} style={{color:"#fff" ,marginRight:"1rem"}} />

                    <FaInstagram size={30} style={{color:"#fff" ,marginRight:"1rem"}} />
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Footer;