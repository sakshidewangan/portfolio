import React from "react";
import "./ProjectCard.css";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ({ number, role, title, images, liveUrl }) => {
  return (
    // ⬇️ Make this wrapper sticky, not inside CardBody
    <div className="sticky-project-card-wrapper">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <div className="project-card">
            <div className="project-header">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                <h2 className="project-number">{number}</h2>
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                <div>
                  <p className="project-label">{title}</p>
                  <p className="project-role-name">{role}</p>
                </div>
              </CardItem>
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
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ProjectCard;
