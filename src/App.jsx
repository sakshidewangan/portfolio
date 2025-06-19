import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import bgImage from "/Images/wallpaper2.jpg";

function App() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "sticky",
          top: 0,
          zIndex: 1,
          paddingTop: "70px",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div id="Home">
          <Home />
        </div>
      </div>

      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
