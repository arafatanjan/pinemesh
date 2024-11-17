
// import React from 'react';
// import './FeatureSection.css'

// const FeaturesSection = () => {
//   return (
//     <section className="features-section">
//       <h2>We provide...</h2>
//       <ul>
//         <li>Personalized routine</li>
//         <li>Follow-up after completing courses</li>
//         <li>Access to additional resources</li>
//         <li>Free community support</li>
//       </ul>
//     </section>
//   );
// };

// export default FeaturesSection;

// components/FeaturesSection.js
import React, { useState } from 'react';
import './FeatureSection.css';
import image from '../assets/image6.png'

const features = [
  {
    id: 1,
    title: "Personalized routine",
    description: "",
  },
  {
    id: 2,
    title: "Follow-up after completing courses",
    description: "",
  },
  {
    id: 3,
    title: "Access to additional resources",
    description:
      "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
  },
  {
    id: 4,
    title: "Free community support",
    description: "",
  },
];


const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleSelect = (id) => {
    setSelectedFeature(id);
  };

  return (
    <section className="features-section">
      
      <div className="features-content">
      
        <div>
        {/* <ul>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Personalized routine</span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Follow-up after completing courses</span>
          </li>
          <li className="highlighted">
            <i className="fas fa-check-circle"></i>
            <div>
              <strong>Access to additional resources</strong>
              <p>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Free community support</span>
          </li>
        </ul> */}
        <h2>We provide...</h2>
           <ul className="features-list">
        {features.map((feature) => (
          <li
            key={feature.id}
            className={`feature-item ${
              selectedFeature === feature.id ? "highlighted" : ""
            }`}
            onClick={() => handleSelect(feature.id)}
          >
            <span
              className={`icon ${
                selectedFeature === feature.id ? "highlighted-icon" : ""
              }`}
            >
              &#10003;
            </span>
            <div>
              <strong>{feature.title}</strong>
              {feature.description && selectedFeature === feature.id && (
                <p>{feature.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
        <button className="learn-more-btn">Learn More About Our Services</button>
      </div>
      
      <div className="features-image">
        <img src={image} alt="A mother and child sitting on a couch" />
        <div className="icon-overlay">
          <i className="fas fa-shield-alt"></i>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

