import React from "react";
import "./technology.css";
import data from "../../data.json";
import TechItem from "../../Components/TechItem/TechItem";

const Technology = () => {
  const { technology } = data;

  return (
    <div className="technology-main">
      <div className="technology-header">
        <p>03</p>SPACE LAUNCH 101
      </div>
      <div className="container">
        <TechItem technologies={technology} />
      </div>
    </div>
  );
};

export default Technology;
