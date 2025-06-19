// import React from "react";
// import "./NavBar.css";

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>
//           <a href="#Home">Home</a>
//         </li>
//         <li>
//           <a href="#About">About</a>
//         </li>
//         <li>
//           <a href="#Skills">Skills</a>
//         </li>
//         <li>
//           <a href="#Projects">Projects</a>
//         </li>
//         <li>
//           <a href="#Contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="dropDown" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
