import React from 'react';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineMessage } from "react-icons/md";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <MdOutlineMessage className="navbar-icon"/>
        <FaUserCircle className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
