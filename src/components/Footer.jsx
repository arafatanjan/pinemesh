
import React from 'react';
import './Footer.css';
import pic1 from '../assets/Vector (1).png'
import pic2 from '../assets/Vector (2).png'
import pic3 from '../assets/Vector (3).png'
import pic4 from '../assets/Vector (4).png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h6 style={{color: '#666'}}>Categories</h6>
          <p>Nutrition and diet</p>
          <p>Fitness training</p>
          <p>Mindfulness</p>
          <p>Mental health</p>
          <p>Personal growth</p>
          <p>Social well-being</p>
        </div>
        <div className="footer-column">
          <h6 style={{color: '#666'}}>About</h6>
          <p>About us</p>
          <p>Our partners</p>
          <p>Investors</p>
          <p>Career</p>
        </div>
        <div className="footer-column">
          <h6 style={{color: '#666'}}>Resources</h6>
          <p>FAQ</p>
          <p>Refund policies</p>
          <p>Terms and conditions</p>
          <p>Cookie</p>
          <p>Latest posts</p>
        </div>
        <div className="footer-column">
          <h6 style={{color: '#666'}}>Support</h6>
          <p>Get in touch</p>
          <p>Visit our forum</p>
        </div>
      </div>

      <div className="footer-social">
        <p>Join our official channels</p>

        <div className="social-icons">
          <img src={pic1} alt='pic1' />
          <img src={pic2} alt='pic1' />
          <img src={pic3} alt='pic1' />
          <img src={pic4} alt='pic1' />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 EduPath. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
