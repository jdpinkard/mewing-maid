import React from 'react'
import "./Header.css";
import logo from "../../assets/logo.png";
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-content'>
          <a href="/"><img className="header-logo" src={logo} alt="Mewing Maid Logo" /></a>
          <span>
            <h1 className='header-text'>The Mewing Maid Cat'fe</h1>
            <h2 className='header-subtext'>Exodus - Lavender Beds - Ward 29 - Plot 36</h2>
          </span>
        </div>
        <NavBar />
    </div>
  )
}

export default Header