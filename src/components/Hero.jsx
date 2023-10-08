import React, { useState }  from 'react'
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components"
import homeImage1 from "../assets/image 1.png";
import homeImage2 from "../assets/image 11.png";
import homeImage3 from "../assets/image 12.png";
import homeImage4 from "../assets/image 13.png";
// import homeImage2 from "../assets/image 3(1).png";
import logo from "../assets/ELL 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Hero = () => {
  const[currentState,setCurrentState]=useState(2)

  const [navbarState, setNavbarState] = useState(false);
  const car = () => {

    setCurrentState(0);
  }
  const scooty = () => {

    setCurrentState(1);
  }
  const bike = () => {

    setCurrentState(2);
  }
  const truck = () => {

    setCurrentState(3);
  }

  const imageSlide=[
    {
      url:homeImage2
    },
    {
      url:homeImage1
    },
    {
      url:homeImage3
    },
    {
      url:homeImage4
    },
  ]

  

    
  return (
    <>
    <Div>
    
      <nav>
        <li className="navitems">Furnitures</li>
        <li className="navitems">Collections</li>
        <li className="navitems">Designs</li>
        
        <li id="logo"><img src={logo} alt="" /></li>
        {/* <li className='contact1'><a href="../register.html">Sign Up</a></li>
        <li className='contact2'><a href="../login.html">Login</a></li> */}
        <li id="contact">Contact Us</li>
      </nav>
      <div id="carrosel">
        <div onClick={car} className="carrosel-items"></div>
        <div onClick={scooty} className="carrosel-items"></div>
        <div onClick={bike} className="carrosel-items"></div>
        <div onClick={truck} className="carrosel-items"></div>
      </div>
      <div className="background">
      <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
      <img id="hmimage"src={imageSlide[currentState].url} alt="" />
    </div>
    </Div>

    <ResponsiveNav state={navbarState}>
    <ul>
      <li>
        <a href="" onClick={() => setNavbarState(false)}>
          Furnitures
        </a>
      </li>
      <li>
        <a href="" onClick={() => setNavbarState(false)}>
          Collections 
        </a>
      </li>
      <li>
        <a href="" onClick={() => setNavbarState(false)}>
          Designs
        </a>
      </li>
     
      
    </ul>
  </ResponsiveNav>
  </>
  )
}

export default Hero
const Div = styled.div`
    
    // color:red;
    height: 794px;
    // background-color: green;
    
      .background {
        height: 100%;
        img {
          width: 100%;
          height: 794px;
          z-index:0;
          filter: brightness(60%);
        }
      }
      .toggle{
        display:none;
        
      }
    
    #carrosel{
      display:flex;
      flex-direction: column;
      gap:10px;
      position: absolute;
      bottom:40%;
      left:95%;
      // align-items:bottom;
      // justify-content:bottom;
      z-index:3;

    }
    .carrosel-items{
      width:27px;
      border-radius:20px;
      height:18px;
      background-color:#202F1F;
    }
    .carrosel-items:hover{
        cursor:pointer;
      }
    nav{
      color:white;
      display:flex;
      z-index:3;
      flex-direction:row;
      gap:40px;
      // justify-content:center;
      // align-items:center;
      position: absolute;
      left: 250px;
      #contact{
        position: absolute;
        right:-190%;
      }
      .contact1{
        position: absolute;
        right:-120%;
        // top:10%;
      }
      .contact2{
        position: absolute;
        right:-140%;
        // top:10%;
      }
      #logo{
        position: absolute;
        right:-50%;
        top:-20px;
      }
      li{
        padding: 20px 0px;
        text-decoration:none;
        list-style:none;
        // color:white;
        font-size:20px;
      }
      li:hover{
        color: grey;

        cursor:pointer;
      }
    }
    @media screen and (min-width: 280px) and (max-width: 980px) {
      height: 25rem;
      
      .toggle{
        display: flex;
        z-index:3;

        position:absolute;
        top:10px;
        left:10px;
        width:200px;
        height:40px;
        // background-color:red;
      }
      #logo{
        display:block;
        position: absolute;
        top:30px;
        left:-70px;
      }
      nav{
        // display:none;
      }
      .navitems{
        display:none;
      }
      #contact{
        display:none;
      }
      #carrosel{
        display:flex;
        flex-direction: column;
        gap:10px;
        position: absolute;
        top:20%;
        left:95%;
        // align-items:bottom;
        // justify-content:bottom;
        z-index:3;
  
      }
      .carrosel-items:hover{
        cursor:pointer;
      }
      .carrosel-items{
        width:15px;
        border-radius:10px;
        height:8px;
        background-color: white;
      }
      .background {
        // height: 100%;
        img {
          width: 100%;
          // height: 794px;
          height:85%;
          z-index:0;
          filter: brightness(60%);
        }
      }
      
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #876E61;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #876E61;
          font-weight: 900;
        }
      }
    }
  }
`;
