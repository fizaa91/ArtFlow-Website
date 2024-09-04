import React, { useEffect } from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.jpg'; // Replace with your actual image path
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
    });
  }, []);

  return (
    <section id="home" className="hero-container">
      <div className="hero-section" data-aos="fade-up">
        <div className="hero-content">
          <h1>Capture Excellence, Inspire Vision</h1>
          <p>
            Discover a curated collection of exquisite images that elevate your
            storytelling. Unveil the artistry in every detail and transform your
            creative journey.
          </p>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="hero-image" data-aos="fade-up" data-aos-delay="200">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
