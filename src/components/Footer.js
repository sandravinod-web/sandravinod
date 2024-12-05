import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons
import profilePic from '../assets/profile.png';  // Replace with your profile image path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h3>"Learning, Living, and Leveling Up."</h3>
          <p>GetinTouch();</p>
        </div>
        <div className="socials">
          <a href="#" className="social-link">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="social-link">
            <FaLinkedin size={30} />
          </a>
          <a href="#" className="social-link">
            <FaGithub size={30} />
          </a>
          <a href="mailto:mayank@example.com" className="social-link">
            <FaEnvelope size={30} />
          </a>
        </div>
        <div className="footer-profile">
          <img src={profilePic} alt="Profile" className="footer-profile-pic" /> {/* Updated class name */}
        </div>
        <p>Created by Sandra Vinod 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
