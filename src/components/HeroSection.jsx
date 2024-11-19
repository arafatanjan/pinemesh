// components/HeroSection.js
import React from "react";
import "./HeroSection.css";
import pic from "/assets/image1.png";
import leaf from "/assets/leaf.png";
import star from "/assets/Star.png";

const HeroSection = () => {
  return (
    <section className="hero-section">

      <div className="hero-content">
        <div className="rating">
          <img src={star} alt="star" />
          <span className="rating-value">4.9 (566)</span>
        </div>
        <div className="hero-title">
          <h2>#1 Platform </h2>
          <h2>Powering Health </h2>
          <h2>and Wellness</h2>
        </div>
        <div className="hero-subtitle">
          <h3>We’re restoring home as the primary</h3>
          <h3>place of personal well-being</h3>
        </div>
        <div className="hero-description">
          <p>Health is not just about what you're eating. It's also</p>
          <p>about what you're thinking and saying</p>
        </div>
        <div className="hero-buttons">
          <button className="primary-btn">Browse Courses</button>
          <button className="secondary-btn">Get Started</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={pic} alt="Health and Wellness" />
        <div className="icon-leaf">
        <img src={leaf} alt="leaf-icon"/>
        </div>
        {/* <p>12,000+ Happy learners rely on us regularly</p> */}
        <div className="stats-banner">
          <div className="stats-top">
            <h1 className="stat-number">12,000+</h1>
            <div className="stat-divider"></div>
            <p className="stat-description">
              Happy learners rely on us regularly
            </p>
          </div>
          <div className="stats-bottom">
            <h3 className="stat-subtitle">Find your wellbeing</h3>
            <p className="stat-text">
              By prioritizing self-care and making informed choices, one can
              enhance their overall quality of life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
