import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg' // Assuming you have a profile image in the assets folder
import profile from '../../assets/profile.png' // Assuming you have a round profile image in the assets folder
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resumePDF from '../../assets/PYTHON-resume.pdf';
// import profiles1 from '../../assets/profiles1.png'
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile} alt="" />
      <h1><span>Hello, I am Anuj Thapa</span>, a passionate fullstack developer.</h1>
      <p>I am full stack developer from Nepal with 2 years of experience in website developement.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        {/* <div className="hero-resume">  */}
          <a 
          href={resumePDF}
          // download
          className="hero-resume"
          target="_blank"
          rel="noreferrer"
          >
          My Resume
        </a>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Hero