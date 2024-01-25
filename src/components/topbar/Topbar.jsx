import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  // Function to handle window resize
  const handleResize = () => {
    const navElement = document.getElementById('nav');

    // Toggle classes based on screen size
    if (window.innerWidth <= 1200) {
      navElement.classList.remove('your-selector-left');
      navElement.classList.add('your-selector-bottom');
    } else {
      navElement.classList.remove('your-selector-bottom');
      navElement.classList.add('your-selector-left');
    }
  };

  // Add an event listener for window resize on component mount
  useEffect(() => {
    handleResize(); // Call the function on component mount
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav id="nav" className="your-selector-left">
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
}

export default Topbar;
