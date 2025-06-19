import React, { useState } from "react";

const logos = [
  { src: "Images/image1.png", alt: "C", desp: "Level: Intermediate " },
  {
    src: "Images/image2.png",
    alt: "C++",
    desp: "Level: Intermediate",
  },
  { src: "Images/image3.png", alt: "Java", desp: "Level: Intermediate" },
  { src: "Images/image4.png", alt: "HTML", desp: "Level: Intermediate" },
  { src: "Images/image5.png", alt: "CSS", desp: "Level: Intermediate" },
  { src: "Images/image6.png", alt: "JavaScript", desp: "Level: Intermediate" },
  { src: "Images/image7.png", alt: "React", desp: "Level: Intermediate" },
  { src: "Images/image8.png", alt: "Tailwind", desp: "Level: Beginner" },
  { src: "Images/image9.png", alt: "SQL", desp: "Level: Intermediate" },
  { src: "Images/image10.png", alt: "Git", desp: "Level: Beginner" },
];

const SkillCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="list">
      {logos.concat(logos).map((logo, index) => (
        <div className="item" key={index}>
          <img
            src={logo.src}
            alt={logo.alt}
            className="progress-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
          <div className={`tooltip ${hoveredIndex === index ? "show" : ""}`}>
            <h4>{logo.alt}</h4>
            <p>
              {/* Solved 100+ problems, <br /> actively involved, <br /> click to
              see the progress. */}
              {logo.desp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
