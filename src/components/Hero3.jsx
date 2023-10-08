import React from 'react'
import "./Hero3.css"
import image6 from "../assets/Group.svg";
import image7 from "../assets/Group(6).svg";
import image8 from "../assets/Group(5).svg";
import image9 from "../assets/Group(4).svg";
import image10 from "../assets/Group(3).svg";
import image11 from "../assets/Group(2).svg";
import image12 from "../assets/Group(1).svg";
import image13 from "../assets/image 7.png";
import image20 from "../assets/Line 2.svg";


const Hero3 = () => {
  return (
    <div className='seven'>
        <h1 className='text1'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p className='text2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae aliquid dolorum commodi veritatis vero non iste aspernatur ad. Hic maiores quidem error repellendus esse molestias nemo architecto suscipit possimus. Eaque odio iste voluptatum omnis eligendi consectetur ducimus ipsam, voluptas saepe quos facilis explicabo id porro. Excepturi at iure esse.</p>
        
        <div className='eight'>
            <div className='block1'><img className="svg1" src={image6} alt="" /><span className='innertext'>Sofa Set</span></div>
            <div className='block1'><img className="svg1" src={image7} alt="" /><span className='innertext'>Pooja Unit</span></div>
            <div className='block1'><img className="svg1" src={image8} alt="" /><span className='innertext'>Study</span></div>
            <div className='block1'><img className="svg1" src={image9} alt="" /><span className='innertext'>closet</span></div>
        </div>
        <div className='eight'>
            <div className='block1'><img className="svg1" src={image10} alt="" /><span className='innertext'>TV unit</span></div>
            <div className='block1'><img className="svg1" src={image11} alt="" /><span className='innertext'>Modular Kitchen</span></div>
            <div className='block1'><img className="svg1" src={image12} alt="" /><span className='innertext'>Bedroom</span></div>
        </div>
        <div className='nine'>
        <p id='ten'>Exquisite Offer</p>
        <p id="seven">Awaiting</p>
        <p id="eight">Tap the banner*</p>
        <img id="nine_1" src={image20} alt="" />
        <img id="nine" src={image13} alt="" />

        </div>
    </div>
  )
}

export default Hero3