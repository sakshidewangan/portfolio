import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <section className="project-section">
        <h1 className="project-title">PROJECTS</h1>
        <div
          style={{
            backgroundColor: "#000",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <ProjectCard
            number="01"
            role="Chat Application"
            title="E-Chat"
            images={[
              "Images/echat1.png",
              "Images/echat2.png",
              "Images/echat3.png",
            ]}
            liveUrl="https://echat-arif20484423s-projects.vercel.app/"
          />
          <ProjectCard
            number="02"
            role="Weather Application"
            title="SkyCast"
            images={[
              "Images/weather1.png",
              "Images/weather2.png",
              "Images/weather3.png",
            ]}
            liveUrl="https://sensational-fairy-cf3b3d.netlify.app/"
          />
          <ProjectCard
            number="03"
            role="Portfolio"
            title="Sakshi Dewangan"
            images={[
              "Images/portfolio1.png",
              "Images/portfolio2.png",
              "Images/portfolio3.png",
            ]}
            liveUrl="https://685537840d0426ae417553cc--sakshidewangan.netlify.app/"
          />
          <ProjectCard
            number="04"
            role="Mini Game"
            title="TIC-TAC-TOE"
            images={[
              "Images/game1.png",
              "Images/game2.png",
              "Images/game3.png",
            ]}
            liveUrl="https://sakshidewangan.github.io/Tic-Tac-Toe-Game/"
          />
          <ProjectCard
            number="05"
            role="Mini Project"
            title="My Gallery"
            images={[
              "Images/gallery1.png",
              "Images/gallery2.png",
              "Images/gallery3.png",
            ]}
            liveUrl="https://sakshidewangan.github.io/My-Gallery/"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;


