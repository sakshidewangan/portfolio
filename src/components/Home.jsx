import React from "react";
"use client";
import "./Home.css";
import Icons from "./icons";
import { ColourfulText } from "./ui/colourful-text";

const Home = () => {
  return (
    <>
      {/* original */}
      <div className="home">
        <div className="overlay"></div> {/* Optional background overlay */}
        <div className="text">
          <h1 className="home-title animate delay-1">Hello</h1>
          <h2 className="name animate delay-2 text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
            <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
              <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
                I'm
                <ColourfulText text=" Sakshi Dewangan" />
              </h1>
            </div>
          </h2>
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
