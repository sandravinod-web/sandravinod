import React, { useEffect, useState } from 'react';
import './Header.css';
import profileImage from '../assets/profile.png'; // Replace this with the correct path to your image file

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home">
        <div className="profile">
          <img src={profileImage} alt="Profile" className="header-profile-pic" />
        </div>
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href="#home"># Home</a></li>
          <li><a href="#about">def AboutMe()</a></li>
          <li><a href="#skills">class Skills:</a></li>
          <li><a href="#projects">for project in Projects:</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
