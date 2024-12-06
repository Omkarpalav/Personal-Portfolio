import React from 'react'
import "./ProjectInfoStyle.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import IntroImg1 from "../Assets/project 1.png"
import IntroImg2 from "../Assets/project 2.png"
import IntroImg3 from "../Assets/project 3.png"
import IntroImg4 from "../Assets/project 4.png"
import { Link } from "react-router-dom"

const ProjectInfo = () => {
  return (
    <div className='main'>
        <h1>MY PROJECTS</h1>
        <div className='work-list '>
          <div className='work'>  
            <a href="https://college-university-website.netlify.app">   
                <img src={IntroImg1}/>
                <div className='layer'>
                  <h2>College/University Website</h2>
                  <p>comprehensive online portal for academic programs, campus news, resources, and events.</p>
                </div>
            </a>
          </div>

          <div className='work'> 
              <a href="https://aspects-fieldwork-research-com.netlify.app">  
                <img src={IntroImg3}/>
                <div className='layer'>
                  <h2>Aspects-Fieldwork-Research-Website</h2>
                  <p>This project embodies our commitment to delivering high-quality research and insights in a user-friendly digital format.</p>
                </div>
              </a>
          </div>
          <div className='work'> 
            <a href="https://humanhoodcom.netlify.app" >      
                <img src={IntroImg2}/>
                <div className='layer'>
                  <h2>Ecommerce Website</h2>
                  <p>To create simple tools that simplify life and empower growth, lifestyle & wellness.</p>
                </div>
                </a>
          </div>

          <div className='work'> 
            <a href="https://nailart1232.netlify.app">  
              <img src={IntroImg4}/>
              <div className='layer'>
                <h2>Nails-Art Website</h2>
                <p>An innovative platform showcasing stunning nail art designs and tutorials, inspiring creativity in the realm of nail care and beauty.</p>
              </div>
            </a>
          </div>
        </div>
        {/* <Button variant="primary">See More</Button>{' '} */}
        <Link to="/project">
          <Button variant="primary">See More</Button>
        </Link>
        
    </div>
  )
}

export default ProjectInfo