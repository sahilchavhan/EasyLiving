import React from 'react'
import "./About.css"
import { BsLinkedin, BsFacebook, BsEnvelope, BsArrowBarUp, BsArrowRight, BsArrowLeft } from "react-icons/bs";

import image18 from "../assets/image 8.png";
import image19 from "../assets/Group 8.svg";
import image20 from "../assets/Group 7.svg";


const About = () => {
  return (
    <>
      <h1 id="seven_3" className='seven'>Our Custom Furniture</h1>

    <div className='thirteen'>
            {/* <BsArrowLeft/> */}
            <p id="seven_4">Livingroom</p>
            <img className='pic1' src={image20} alt="" />
            <img className='pic2' src={image18} alt="" />
            <img className='pic3' src={image19} alt="" />
            {/* <BsArrowRight/> */}
            <div id="carrosel1">
        <div id="carrosel-items1"></div>
        <div id="carrosel-items1"></div>
        <div id="carrosel-items1"></div>
        <div id="carrosel-items1"></div>
      </div>
    </div>
    <div className="nine_01">Get yours now</div>

    </>
  )
}

export default About