import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cd9b0906-5b6b-439d-befe-ce7dfe346fab");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          // console.log("Success", res);
          alert("res.message")
        }
      };
      
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets Talk</h1>
                    <p>I'm currently available for remote projects.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                          <img src={mail_icon} alt="" /><p>anujth345@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                           <img src={call_icon} alt="" /><p>+977-9825952361</p>
                        </div>
                        <div className="contact-detail">
                             <img src={location_icon} alt="" /><p>Jhapa,Nepal</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder="Enter you Email" name="email"/>
                    <label htmlFor="">Write your message Here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" ></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact