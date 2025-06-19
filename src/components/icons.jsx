import React from "react";

const Icons = ({ link, src, title }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" title={title}>
      <img src={src} alt={title} />
    </a>
  );
};

export default Icons;
