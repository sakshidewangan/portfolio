import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ number, role, title, images, liveUrl }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h2 className="project-number">{number}</h2>
        <div>
          <p className="project-label">{title}</p>
          <p className="project-role-name">{role}</p>
        </div>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="live-btn"
        >
          LIVE PROJECT
        </a>
      </div>

      <div className="project-images">
        <div className="main-image">
          <img src={images[0]} alt="Main Project" />
        </div>
        <div className="side-images">
          <img src={images[1]} alt="Side Project 1" />
          <img src={images[2]} alt="Side Project 2" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
