import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import bgImage from "/Images/wallpaper2.jpg";

function App() {
  const sectionStyle = {
    position: "relative",
    width: "100%",
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
