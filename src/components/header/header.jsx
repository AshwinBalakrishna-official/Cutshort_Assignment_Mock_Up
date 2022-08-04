import React from 'react';
import Logo from '../../assets/logos/eden_logo.png';
import './header.css';

const header = () => {
  return (
    <div className='header'>
        {/* LOGO  */}
            <img className="header-logo" src={Logo} alt="Logo.png" />
        
        {/* Name of the Organisation */}
            <p className='header-text'>Eden</p>
    </div>
  )
}

export default header