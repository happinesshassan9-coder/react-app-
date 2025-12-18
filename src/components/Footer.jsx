import React from "react";
import "./Footer.css";

import gallery1 from "../assets/images/teachers-1.svg";
import gallery2 from "../assets/images/teachers-2.svg";
import gallery3 from "../assets/images/teachers-3.svg";
import gallery4 from "../assets/images/teachers-4.svg";
import gallery5 from "../assets/images/kid-1.svg";
import gallery6 from "../assets/images/kid-2.svg";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-top-item">
          <span className="footer-top-label">Address:</span>
          <p>1925 Boggess Street</p>
        </div>

        <div className="footer-top-item">
          <span className="footer-top-label">Phone:</span>
          <p>(00) 875 784 568</p>
        </div>

        <div className="footer-top-item">
          <span className="footer-top-label">Email:</span>
          <p>info@gmail.com</p>
        </div>
      </div>

    
      <div className="footer-main">

        
        <div className="footer-col brand">
          <h2 className="logo">edunity</h2>
          
          <p>
            Interdum velit laoreet id donec ultrices tincidunt arcu.
            Tincidunt tortor aliquam facilisis cras fermentum odio eu.
          </p>
        </div>

    
        <div className="footer-col">
          <h3>Our Services:</h3>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Management</li>
            <li>Digital Marketing</li>
            <li>Blog News</li>
          </ul>
        </div>


        <div className="footer-col">
          <h3>Gallery</h3>
          <div className="gallery">
            <img src={gallery1} alt="gallery" />
            <img src={gallery2} alt="gallery" />
            <img src={gallery3} alt="gallery" />
            <img src={gallery4} alt="gallery" />
            <img src={gallery5} alt="gallery" />
            <img src={gallery6} alt="gallery" />
          </div>
        </div>


        <div className="footer-col">
          <h3>Subscribe</h3>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE NOW</button>
          </div>
        </div>

      </div>

    
      <div className="footer-bottom">
        <p>Copyright © 2024 edunity | All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;