import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JH's Portfolio</div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
