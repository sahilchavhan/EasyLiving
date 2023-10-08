import React from 'react'
import "./Hero2.css"
import image2 from "../assets/image 4.png";
import image3 from "../assets/image 3(1).png";
import image5 from "../assets/image 5(1).png";
import image21 from "../assets/Line 1.svg";




const Hero2 = () => {
  return (
    <div className='one'>
        <div className='two'>
          <p className='text'>CUSTOM FURNITURE</p>
        </div>
        <div className='three'>
            <div className='four'>
                <div className='six' id="six_2"></div>
                <div className='six' id="six">
                {/* <p>Explore more Articles & Designs</p> */}
                <h3 id="text_4">Explore more </h3>
                <h4 id="text_5">Articles & Designs</h4>
                <img id="item_1" src={image2} alt="" />
                <img id="item_2"src={image21} alt="" />
                </div>
            </div>
            <div className='five'>
              <p id="text_2">BRAND NEW </p>
              <p id="text_3">DESIGNS</p>

            </div>
        </div>
    </div>
  )
}

export default Hero2