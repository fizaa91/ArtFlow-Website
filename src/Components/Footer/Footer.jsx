import React from 'react';
import './Footer.css'; // Ensure this CSS file is updated accordingly
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`} data-aos="fade-up" data-aos-duration="1000">
      <div className="footer-content">
        <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook" data-aos="zoom-in" data-aos-delay="200">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter" data-aos="zoom-in" data-aos-delay="300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram" data-aos="zoom-in" data-aos-delay="400">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
          <h4>Contact Us</h4>
          <p>Email: support@artflow.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="300">
        <p>&copy; {new Date().getFullYear()} ArtFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
