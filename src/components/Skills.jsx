import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="Skills-section">
      <hr />
      <h1 className="skill-title">SKILLS</h1>
      <div className="skill-box">
        <div className="slider">
          <SkillCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
