import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JH's Portfolio</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://jane-2.tistory.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li><Link to="/write">Write</Link></li>
        <li><Link to="/posts">Post List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
