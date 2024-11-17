// components/HeroSection.js
import React from 'react';
import "./HeroSection.css"
import pic from '../assets/image1.png'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className='hero-content'>
      <div className="rating">
        <span className="stars">⭐⭐⭐⭐⭐</span>
        <span className="rating-value">4.9 (566)</span>
      </div>
      <h1>#1 Platform </h1>
      <h1>Powering Health </h1>
      <h1>and Wellness</h1>
      <p className="hero-subtitle">
        We’re restoring home as the primary 
      </p>
      <h3>place of personal well-being</h3>
      <p className="hero-description">
        Health is not just about what you're eating. It's also
        </p>
        <p className="hero-description">
          about what you're thinking and saying
        </p>
      <div className="hero-buttons">
        <button className="primary-btn">Browse Courses</button>
        <button className="secondary-btn">Get Started</button>
      </div>
      </div>
      <div className="hero-image">
        <img src={pic} alt="Health and Wellness" />
        <p>12,000+ Happy learners rely on us regularly</p>
      </div>
    </section>
  );
};

export default HeroSection;
