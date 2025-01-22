import React from 'react';
import './Footer.css';
import { MdEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import facebooklogo from '../../assets/facebook.png'
import telegram from '../../assets/telegram.png'
import instagram from '../../assets/instagram.png'
// import { FaFacebook } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="navbar-bottom d-flex justify-content-between">
          <div className="sub-navbar-bottom-left">
              <h1>My Quiz</h1>
          </div>
          <div className="sub-navbar-bottom-center">
            <h2>Contact Us</h2>
            <div className="">
              <ul>
                <li className='nav-link d-flex'><span><MdEmail /></span>sonliu056@gmail.com</li>
                <li className='nav-link d-flex'><span><LuPhoneCall /></span>097 268 422</li>
                <li className='nav-link d-flex'><span><FaLocationDot /></span>Find Location</li>
              </ul>
            </div>
          </div>
          <div className="sub-navbar-bottom-right">
            <ul className='d-flex'>
              <p>Follow Us</p>
                <img src={facebooklogo} alt="" />
                <img src={telegram} alt="" />
                <img src={instagram} alt="" />
            </ul>

          </div>
        </div>
        <hr className='divider' />
      </div>
    </>
  )
}

export default Footer