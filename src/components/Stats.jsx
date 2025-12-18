import React from "react";
import "./Stats.css";

import HeroImage from "../assets/images/stats-kid.svg";
import AnimOne from "../assets/images/animation-1.svg";
import AnimTwo from "../assets/images/animation-2.svg";
import AnimThree from "../assets/images/animation-3.jpg";

import TeacherIcon from "../assets/images/stats-icon-1.svg";
import StudentIcon from "../assets/images/stats-icon-2.svg";
import ClassroomIcon from "../assets/images/stats-icon-3.svg";
import AwardIcon from "../assets/images/stats-icon-4.svg";

const HeroSection = () => {
  return (
    <section className="hero-wrapper">

      <img src={AnimOne} alt="" className="floating anim-one" />
      <img src={AnimTwo} alt="" className="floating anim-two" />
      <img src={AnimThree} alt="" className="floating anim-three" />

      <div className="hero-image-container">
        <img src={HeroImage} alt="Kids learning" className="hero-image" />

        <button className="play-btn">
          ▶
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon">
            <img src={TeacherIcon} alt="Teachers" />
          </div>
          <h3>2,500</h3>
          <p>Total Teacher</p>
        </div>

        <span className="divider" />

        <div className="stat-item">
          <div className="stat-icon">
            <img src={StudentIcon} alt="Students" />
          </div>
          <h3>5,000</h3>
          <p>Total Student</p>
        </div>

        <span className="divider" />

        <div className="stat-item">
          <div className="stat-icon">
            <img src={ClassroomIcon} alt="Classrooms" />
          </div>
          <h3>350</h3>
          <p>Total Classroom</p>
        </div>

        <span className="divider" />

        <div className="stat-item">
          <div className="stat-icon">
            <img src={AwardIcon} alt="Awards" />
          </div>
          <h3>1,200</h3>
          <p>Best Awards Won</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
