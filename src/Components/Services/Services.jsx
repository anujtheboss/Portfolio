import React from 'react'
import './Services.css' // Assuming you have a CSS file for styling
import theme_pattern from '../../assets/theme_pattern.svg' // Assuming you have a theme pattern image in the assets folder
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg' // Assuming you have an arrow icon in the assets folder
const Services = () => {
  return (
    <div id="services" className="services">
        <div className="services-title">
            <h1>My services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default Services