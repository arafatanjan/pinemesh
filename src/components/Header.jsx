
import React , { useState } from 'react';
import "./Header.css"
import cart from '/assets/cart.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
     <header className="header">
      <div className="logo">Logo</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Courses</li>
          <li>Instructors</li>
          <li>Blogs</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </nav>
      <div className="cart-login">
        <img src={cart} alt="cart" />
        <button className="login-btn">Login</button>
      </div>
      
    </header>
  );
};

export default Header;
