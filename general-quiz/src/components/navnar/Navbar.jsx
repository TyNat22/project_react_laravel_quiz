import React, { useState,useEffect} from 'react';
import { NavLink,Link, useNavigate } from 'react-router-dom';

import './Navbar.css'


const  Navbar=()=> {
  const [scrolled, setScrolled] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>                
        <nav className={`navbar navbar-expand-lg mt-0 ${scrolled ? 'scrolled' : ''}`} >
          <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
            <div className='collapse navbar-collapse ' id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <h1>My Quiz</h1>
          </ul>

  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item nav-link">
    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}  aria-current="page">
    Home
    </NavLink>
  </li>
  {/* <li className="nav-item nav-link ">
    <NavLink to='/quiz' className={({ isActive }) => isActive ? 'active' : ''}  aria-current="page">
    Quiz
    </NavLink>
  </li> */}
  <li className="nav-item nav-link">
    <NavLink to='/blog' className={({ isActive }) => isActive ? 'active' : ''} >
      Blog 
    </NavLink>
  </li>
  <li className="nav-item nav-link">
    <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active' : ''} >
      About
      </NavLink>
  </li>
  <li className="nav-item nav-link">
    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} >Contact</NavLink>
  </li>
</ul>
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <NavLink to="register" className={({ isActive }) => isActive ? 'active' : ''} aria-current="page" href="#">Register</NavLink>
            </li>
            <li className="nav-item nav-link">
              <NavLink to="login" className={({ isActive }) => isActive ? 'active' : ''} >LogIn</NavLink>
            </li>
        
          </ul>
     
            </div>
          </div>
        </nav> 
  

    </>
  )
}

export default Navbar;