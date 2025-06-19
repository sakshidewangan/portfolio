import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section class="about-section">
        <h1 className="about-title">ABOUT ME</h1>
        <p>
          Hi! I’m Sakshi Dewangan, a passionate and self-driven <br /> Web
          Developer with a strong interest in building impactful <br /> and
          user-centric applications. I specialize in React, Java, Node.js <br />
          and enjoy solving real-world problems through clean and efficient
          <br /> code. Recently, I worked on projects that <br />
          combine my love for design and functionality — such as a weather{" "}
          <br />
          app with dynamic visuals. Apart from coding, I love exploring <br />
          new technologies, contributing to open-source, <br /> and constantly
          improving my skills.
        </p>
        <a
          href="https://drive.google.com/file/d/1O1zhMJxAp5_Y5YGTaODlDagxtX3KuGvG/view"
          target="blank"
          className="contact-button"
        >
          Resume
        </a>
      </section>
    </>
  );
};

export default About;
