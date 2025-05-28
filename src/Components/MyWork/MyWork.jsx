import React from 'react'
import './MyWork.css' // Assuming you have a CSS file for styling
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        {/* <div className="mywork-container">
              {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
              })}
        </div> */}
         <div className="mywork-container">
              {mywork_data.map((work,index)=>{
                return (
                  <div key={index} className="mywork-item-wrapper">
                    <div className="mywork-overlay-buttons">
                      <a href={work.github_url || "#"} className="mywork-github-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                      <a href={work.preview_url || "#"} className="mywork-preview-link" target="_blank" rel="noopener noreferrer">
                        Preview
                      </a>
                    </div>
                    <img src={work.w_img} alt="" />
                  </div>
                )
              })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork