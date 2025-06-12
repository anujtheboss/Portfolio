import React from 'react'
import './About.css' // Assuming you have a CSS file for styling
import theme_pattern from '../../assets/theme_pattern.svg'
// import about_profile from '../../assets/about_profile.svg' // Assuming you have a profile image in the assets folder
import profiles from '../../assets/profiles.png'
import profile from '../../assets/profile.png'
const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a passionate and detail-oriented Software Engineer with a strong foundation in building scalable, efficient, and user-friendly applications. I specialize in turning complex problems into clean, maintainable code, and I thrive in collaborative environments where learning and innovation go hand-in-hand.

My background spans both front-end and back-end development, and I enjoy working across the full stack to bring ideas to life — whether it's creating seamless user interfaces or optimizing server performance.</p>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sint perferendis et aspernatur vel accusamus fugit ducimus possimus a. Quae.</p> */}
                </div>
                   <div className="about-skills">
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"50%", marginLeft:"28px"}} />
                    </div>
                    <div className="about-skill">
                        <p>DJANGO/FASTAPI</p><hr style={{width:"60%",marginLeft:"-19px"}} />
                    </div>
                    <div className="about-skill">
                        <p>DATA ANALYSIS</p><hr style={{width:"70%",marginLeft:"9px"}} />
                    </div>
                    <div className="about-skill">
                        <p>MACHINE/DEEP LEARNING</p><hr style={{width:"80%",marginLeft:"-96px"}} />
                    </div>
                </div>
            </div>
        </div>

    <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>17+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>COURSES TAKEN</p>
        </div>
    </div>
    </div>
  )
}

export default About