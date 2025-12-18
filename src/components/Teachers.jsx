import React from "react";
import "./Teachers.css";

import cheryl from "../assets/images/teachers-1.svg";
import willie from "../assets/images/teachers-2.svg";
import jimmy from "../assets/images/teachers-3.svg";
import micheal from "../assets/images/teachers-4.svg";


const Teachers = () => {
  return (
    <section className="teachers-section">
      <div className="teachers-header">
        <span className="section-tag">
          <span className="tag-dot" /> TEACHER
        </span>

        <div className="header-row">
          <h2>Meet Our Instructor</h2>
        </div>
      </div>

      <div className="teachers-grid">
        <TeacherCard image={cheryl} name="Cheryl Curry" role="Teacher" />
        <TeacherCard image={willie} name="Willie Diaz" role="Teacher" />
        <TeacherCard image={jimmy} name="Jimmy Sifuentes" role="Teacher" />
        <TeacherCard image={micheal} name="Micheal Hammond" role="Teacher" />
      </div>
    </section>
  );
};

const TeacherCard = ({ image, name, role }) => {
  return (
    <div className="teacher-card">
      <div className="image-wrapper">
        <img src={image} alt={name} />

        <span className="share-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8a3 3 0 10-2.83-4H15a3 3 0 003 3zM6 14a3 3 0 102.83 4H9a3 3 0 00-3-3zm12 0a3 3 0 10-2.83 4H15a3 3 0 003-3zM8.59 13.51l6.83-3.52M15.42 14.01l-6.83-3.52"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="card-info">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  );
};

export default Teachers;
