import React from "react";
import "./Navbar.css";

// Import images from your assets folder
import edunitylogo from "../assets/images/edunity-logo.svg";
import searchIcon from "../assets/icons/search-icon.svg";
import profileIcon from "../assets/icons/profile-icon.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-wrapper">
        <img src={edunitylogo} alt="Edunity Logo" className="logo-img" />

      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Courses</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <img src={searchIcon} alt="Search" className="nav-icon" />
        <img src={profileIcon} alt="Profile" className="nav-icon" />
        <button className="nav-btn">Contact</button>
      </div>
    </nav>
  );
}