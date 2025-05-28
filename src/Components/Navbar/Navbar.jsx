import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
// import mylogo from '../../assets/mylogo.svg' // Assuming you have a logo image in the assets folder
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import anujbro from '../../assets/anujbro.png'
const Navbar = () => {
  const [menu,setMenu] =useState("home");
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className="navbar">
        <img style={{height:"60px", width:"110px"}} src={anujbro} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={underline} alt=""/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu=="about"?<img src={underline} alt=""/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=="services"?<img src={underline} alt=""/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu=="work"?<img src={underline} alt=""/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contacts</p></AnchorLink>{menu=="contact"?<img src={underline} alt=""/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar

// html is written inside the jsx file 
// for each navbar component we have a css file in same folder