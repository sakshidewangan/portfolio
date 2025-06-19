import React from "react";
import "./Home.css";
import Icons from "./icons";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="overlay"></div> {/* Optional background overlay */}
        <div className="text">
          <h1 className="home-title animate delay-1">Hello</h1>
          <h2 className="name animate delay-2">I'm Sakshi Dewangan</h2>
          <p className="animate delay-3">
            "Code, creativity and constant growth, that's my front-end formula."
          </p>
          <hr className="animate delay-4" />
          <p className="animate delay-5">
            Frontend Developer fueled by creative thinking, problem-solving
            passion and a drive to keep learning and evolving.
          </p>
        </div>
        <div className="icon-list animate delay-6">
          <Icons
            link="https://www.linkedin.com/in/sakshi-dewangan-3ab267178/"
            src="Images/linked_in.png"
            title="LinkedIn"
          />
          <Icons
            link="https://leetcode.com/u/sakshidewangan51/"
            src="Images/leetcode.png"
            title="LeetCode"
          />
          <Icons
            link="https://www.geeksforgeeks.org/user/sakshidewf6ox/"
            src="Images/gfg.png"
            title="GeeksforGeeks"
          />
          <Icons
            link="http://github.com/sakshidewangan"
            src="Images/image10.png"
            title="GitHub"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
