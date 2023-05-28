import React from 'react';
import './footer.css';
import video2 from '../../asset/video2.mp4'
import {FiChevronsRight, FiSend} from 'react-icons/fi'
import{MdOutlineTravelExplore} from "react-icons/md"
import{AiOutlineTwitter} from "react-icons/ai"
const Footer = () => {
  return(
    <section className='footer'>
<div className="videoDiv">
   <video src = {video2} loop autoPlay muted type = "video/mp4"></video>
</div>
  <div className='secContent container'>
    <div className="contactDiv flex ">
      <div className='text'>
        <small> KEEP IN TOUCH</small>
        <h2>Travel with us</h2>
      </div>

      <div className="inputDiv flex ">
        <input type="text" placeholder='Enter Email Address'/>
        <button className='btn flex' type ='submit'>
          SEND <FiSend className ="icon"/>
        </button>
      </div>
    </div>

    <div className="footerCard flex ">
      <div className="footerIntro flex">
        <div className="logoDiv">
          <a href='#' className='logo flex'>
            <MdOutlineTravelExplore className= "icon"/>
            Travel.
          </a>
        </div>
         <div className="footerparagraph">
          Flamingo
         </div>

         <div className="footerSocials">
          <AiOutlineTwitter className = "icon"/>
         </div>
         
      </div>

      <div className="footerLinks grid">
        <div className='linkGroup'>
          <span className="groupTitle">
            OUR Agency
          </span>

          <li className="footerList flex">
            <FiChevronsRight className = "icon"/>
            Services
          </li>

          <li className="footerList flex">
            <FiChevronsRight className = "icon"/>
            Insurance
          </li>

          <li className="footerList flex">
            <FiChevronsRight className = "icon"/>
            Agency
          </li>

          <li className="footerList flex">
            <FiChevronsRight className = "icon"/>
            Tourism
          </li>
          <li className="footerList flex">
            <FiChevronsRight className = "icon"/>
            Payment
          </li>

        </div>
      </div>
    </div>
  </div>

    </section>
  )
}

export default Footer;
