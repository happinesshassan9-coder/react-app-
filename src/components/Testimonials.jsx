import React from "react";
import "./Testimonials.css";

import AnimOne from "../assets/images/animation-1.svg";
import AnimTwo from "../assets/images/animation-2.svg";
import AnimThree from "../assets/images/animation-3.jpg";



import AvatarOne from "../assets/images/testimonial-1.svg";
import AvatarTwo from "../assets/images/testimonial-2.svg";
import AvatarThree from "../assets/images/testimonial-3.svg";

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <img src={AnimOne} alt="" className="floating anim-one" />
      <img src={AnimTwo} alt="" className="floating anim-two" />
      <img src={AnimThree} alt="" className="floating anim-three" />


    
      <div className="testimonial-header">
        <span className="tag">TESTIMONIAL</span>
        <h2>What Parents Say</h2>
      </div>

      
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim
            enim. Amet consectetur adipiscing”
          </p>

          <div className="profile">
            <img src={AvatarOne} alt="Kathy Sullivan" />
            <div>
              <h4>Kathy Sullivan</h4>
              <span>CEO at ordain it</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card active">
          <div className="stars">★★★★★</div>
          <p>
            “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim
            enim. Amet consectetur adipiscing”
          </p>

          <div className="profile">
            <img src={AvatarTwo} alt="Elsie Stroud" />
            <div>
              <h4>Elsie Stroud</h4>
              <span>CEO at Edwards</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim
            enim. Amet consectetur adipiscing”
          </p>

          <div className="profile">
            <img src={AvatarThree} alt="Kathy Sullivan" />
            <div>
              <h4>Kathy Sullivan</h4>
              <span>CEO at ordain it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
