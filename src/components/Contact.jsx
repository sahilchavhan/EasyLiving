import React from 'react'
import "./Contact.css"
import image19 from "../assets/image 9.png";

const Contact = () => {
  return (
    <div className='fourteen'>
      <img id="fifteen_01" src={image19} alt="" />
      <div className='fifteen'>FOR CONSULTATION
BOOK YOUR <span className="sixteen">FREE</span> PICKUP & DROP NOW</div>
      <div className="contact4">
        <form>
        <p className="contact5">Your name</p>
        <input type="text" id="contact9"></input>
        <hr></hr>
        <p className='contact5'>Your email</p>
        <input type="text" id="contact9"></input>
        <hr></hr>
        <p className='contact5'>Mobile no</p>
        <input type="text" id="contact9"></input>
        <hr></hr>
        <p className='contact5'>Comment</p>
        <input type="text-area" id="contact9"></input>
        <hr></hr>
        <div className="nine_01">Get yours now</div>
        </form>
      </div>
    </div>
  )
}

export default Contact