import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook, BsEnvelope, BsArrowBarUp, BsArrowUp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <div className="ten_1"><p>Are you ready ?</p></div>
      <div className="ten_01"><h1>Lets get started</h1></div>
      
      
      <div className="nine_1">
        Get started
        {/* <span>Contact no: +91 8828405231</span>
        <span>E-mail: contact@tourmate.in</span> */}
        {/* <ul className="social__links">
        <li>
          <a href="https://instagram.com/tourmate_?igshid=MmJiY2I4NDBkZg==" target="_blank">
          <BsFacebook />
          </a>
        </li>
        <li>
        <a href="https://instagram.com/tourmate_?igshid=MmJiY2I4NDBkZg==" target="_blank">
        <AiFillInstagram />
          </a> 
        </li>
        <li>
        <a href="mailto:contact@tourmate.in" target="_blank">
        <BsEnvelope />
          </a>
        </li>
        </ul> */}
      </div>
      <div>
      <ul className="eight_1">
          <li>
            <a href="#hero">Campaigns</a>
          </li>
          <li>
            <a href="#ten">E-mail marketing</a>
          </li>
          <li>
            <a href="#recommend">Branding</a>
          </li>
          <li>
            <a href="#testimonials">Offline</a>
          </li>
        </ul>
      </div>
      <div className="seven_1"><span>Copyright © 2020. LogoIpsum. All rights reserved.</span></div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  
  position: absolute;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  background-color: #E6E6E6;
  color: BLACK;
  


  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: grey;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  .seven_1{
    color:grey;

  }
  .ten_1{
    color:grey;
    padding:none;
    margin:-10px;
    
  }
  .nine_1{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    // gap:10px;
    width: 85px;
height: 40px;
flex-shrink: 0;
background-color:black;
border-radius:8px;
color:white;
padding: 0px 30px;
  }
  .nine_1{
    cursor:pointer;
  }
  .eight_1{
    // color:#FFFFFF;
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
    .ten_1{
      font-size: 18px;
      margin:0px;
    }
    .ten_01{
      margin:0px;
      // font-size: 28px;

    }
  }
`;
