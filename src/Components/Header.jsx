import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
      <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Launch Tou App</span>Width Confidence and Creativety</h1>
            <p className='details'></p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
      </div>
  )
};

export default Header;
