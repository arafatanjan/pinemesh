
import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      {/* <nav> */}
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
        <button className="login-btn">Login</button>
      {/* </nav> */}
    </div>
  );
};

export default Header;
