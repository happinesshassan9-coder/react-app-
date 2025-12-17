import "./About.css";

import kidMain from "../assets/images/about-kid-2.svg";
import kidSmall from "../assets/images/about-kid-1.svg";
import animation1 from "../assets/images/animation-1.svg";
import animation2 from "../assets/images/animation-2.svg";
import animation3 from "../assets/images/animation-3.jpg";
import people from "../assets/images/subscribers.svg";

export default function About() {
  return (
    <section className="about">
    
      <img src={animation1} className="about-anim anim-1" alt="" />
      <img src={animation2} className="about-anim anim-2" alt="" />
      <img src={animation3} className="about-anim anim-3" alt="" />

      
      <div className="about-images">
        <div className="happy-student">
          <span>Happy</span>
          <strong>Student</strong>
          <img src={people} alt="People" />
        </div>

        <div className="kid-small">
          <img src={kidSmall} alt="Kid playing" />
        </div>

        <div className="kid-main">
          <img src={kidMain} alt="Kid reading" />
        </div>
      </div>

    
      <div className="about-content">
        <span className="about-tag">ABOUT US</span>

        <h2>
          It’s Our Passion To Work With <br />
          Children At <span>Kindergarten.</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>

        <div className="about-features">
          <div className="feature">✔ Quality Educators</div>
          <div className="feature">✔ Play To Learn</div>
          <div className="feature">✔ Safety And Security</div>
          <div className="feature">✔ Homelike Environment</div>
        </div>

        <button className="about-btn">Admission Open</button>
      </div>
    </section>
  );
}