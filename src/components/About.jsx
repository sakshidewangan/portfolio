import React from "react";
import "./About.css";

const About = () => {
  const sectionStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundImage:
      "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG15NXpnaDNvMnZia3h6bzAzdDg4ajFqYWY5OGN6MXQ0c25kc2FycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwNqFMnb7wZgNnq/giphy.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };
  return (
    <>
      <section class="about-section" style={sectionStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <h1 className="about-title">ABOUT ME</h1>
          <p>
            Hi! I’m Sakshi Dewangan, a passionate and self-driven <br /> Web
            Developer with a strong interest in building impactful <br /> and
            user-centric applications. I specialize in React, Java, Node.js{" "}
            <br />
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
        </div>
      </section>
    </>
  );
};

export default About;
