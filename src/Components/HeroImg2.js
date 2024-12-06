import React, { Component } from 'react'
import "./HeroImg2Style.css"
import IntroImg from "../Assets/intro1.png"

class HeroImg2 extends Component{
  render(){
    return (
      <div className='hero-img'>
          <img className="intro-img" src={IntroImg} alt="IntoImg" />
         <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text} </p>
         </div>
      </div>
    )
  }
  
}

export default HeroImg2;