import React from 'react';
import './About.css';
import aboutImage1 from '../../assets/about1.jpg'; // Replace with your actual image paths
import aboutImage2 from '../../assets/about2.jpg';
import aboutImage3 from '../../assets/about3.jpg';

const About = () => {
  return (
    <section id="about" className="about-container">
      <h1 className="about-heading" data-aos="fade-up" data-aos-duration="1000">About Us</h1>
      <div className="about-section" data-aos="fade-up" data-aos-duration="1200">
        <div className="about-images" data-aos="fade-right" data-aos-duration="1200">
          <div className="about-images-top">
            <div className="about-image portrait">
              <img src={aboutImage1} alt="About" />
            </div>
            <div className="about-image portrait">
              <img src={aboutImage2} alt="About" />
            </div>
          </div>
          <div className="about-image landscape">
            <img src={aboutImage3} alt="About" />
          </div>
        </div>
        <div className="about-content" data-aos="fade-left" data-aos-duration="1200">
          <h2 className="about-subheading">Elevating Your Vision with Premium Photography</h2>
          <p>
            We offer a diverse, curated collection of high-quality images to inspire creativity and elevate your projects, whether for personal, commercial, or editorial use.
            Our mission is simple: to make exceptional photography accessible to everyone. With easy licensing, a user-friendly experience, and a commitment to quality, we aim to provide the perfect image for every need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
