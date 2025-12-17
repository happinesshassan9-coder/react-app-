import "./Features.css";

import startCourse from "../assets/images/course-icon.png";
import teachers from "../assets/images/teachers-icon.svg";
import location from "../assets/images/location-icon.png";

const features = [
  {
    title: "Start Course",
    desc: "Begin learning today.",
    icon: startCourse,
    bg: "grey",
    circle: "orange",
  },
  {
    title: "Expert Teachers",
    desc: "Qualified instructors.",
    icon: teachers,
    bg: "green",
    circle: "teal",
  },
  {
    title: "Strategic Location",
    desc: "Safe environment.",
    icon: location,
    bg: "grey",
    circle: "purple",
  },
];

export default function Features() {
  return (
    <section className="features">
      {features.map((item, index) => (
        <div key={index} className={`feature-card ${item.bg}`}>
          <div className={`icon-circle ${item.circle}`}>
            <img src={item.icon} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}