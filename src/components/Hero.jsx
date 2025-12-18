import React from "react";
import "./Hero.css";


import kid1 from "../assets/images/kid-1.svg";
import kid2 from "../assets/images/kid-2.svg";
import sideImage from "../assets/images/side-image.svg";

import animation1 from "../assets/images/animation-1.svg";
import animation2 from "../assets/images/animation-2.svg";
import animation3 from "../assets/images/animation-3.jpg";

import subscribers from "../assets/images/10k-Student.svg";
import people from "../assets/images/subscribers.svg";

export default function Hero() {
  return (
    <section className="hero">
    
      <img src={animation1} alt="" className="bg-anim anim-1" />
      <img src={animation2} alt="" className="bg-anim anim-2" />
      <img src={animation3} alt="" className="bg-anim anim-3" />

      
      <div className="hero-text">
        <img src={sideImage} alt="Decoration" className="side-image" />

        <h1>The Best Place To Learn And Play For Kids</h1>
        <p>Interactive learning experience for growing minds.</p>

        <div className="hero-buttons">
          <button className="primary">Browse Courses</button>
          <button className="secondary">Watch Video</button>
        </div>


        <div className="hero-stats">
          <img src={subscribers} alt="10k Students" />
          <img src={people} alt="People" />
        </div>
      </div>

      <div className="hero-images">
        <img src={kid1} alt="Kid 1" className="kid kid1" />
        <img src={kid2} alt="Kid 2" className="kid kid2" />
      </div>
    </section>
  );
}