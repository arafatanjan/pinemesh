
import React from 'react';
import "./Header.css"
import cart from '../assets/cart.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">Logo</div>
      <div>
        <ul>
          <li>Courses</li>
          <li>Instructors</li>
          <li>Blogs</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
        <div className='cart-login'>
        <img src={cart} alt='cart' />
        <button className="login-btn">Login</button>
        </div>
    </div>
  );
};

export default Header;
