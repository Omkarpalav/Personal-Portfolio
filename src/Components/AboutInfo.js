import React from 'react'
import "./AboutInfoStyle.css"
import IntroImg from "../Assets/about.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import download_icon from "FontAwesomeIcon icon='fa-solid fa-download'"
const PDF_FILE_URL = 'http://localhost:3000/resume.pdf'

const AboutInfo = () => {

  const downloadFileAtURL=(url)=>{
    fetch(url)
    .then((Response) => Response.blob())
    .then((blob) => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split('/').pop();
      const aTag = document.createElement('a')
      aTag.href = blobURL
      aTag.setAttribute('download', fileName)
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    })
    

  }



  return (
    <div className='about-main'>
        <div className='about-left'>
             <img className="intro-img" src={IntroImg} alt="IntoImg" />
        </div>
        <div className='about-right'>
            <h1>About Me</h1>
            <h3 style={{ color: 'red', fontStyle:"oblique" }}> Hello.</h3>
            <p>Welcome to my personal portfolio website! I'm Omkar Palav, a full-stack developer, and this website is a window into my travels, abilities, and projects. As a devoted web developer, I've created this section to introduce myself, demonstrate my skills, and share some of my recent work with you. Concerning my qualifications, I graduated with BSc.IT(Information Technology) in 2023 from Mumbai University. I also recently completed a full-stack developer course at Ntech Global Solutions. With this unique blend of skills and experiences, I'm keen to make a career transition into the IT area as a professional or developer, where I can actively contribute and drive innovation.</p>
            {/* <a href='src/Assets/Resume.pdf' download className='download-btn'>Download Resume</a> */}
            <button className='download-btn' onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Download Resume</button>
        </div>

    </div>
  )
}

export default AboutInfo;