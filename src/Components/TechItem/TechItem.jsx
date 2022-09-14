import React, { useState } from "react";
import "./style.css";

const TechItem = ({ technologies }) => {
  const [techIndex, setTechIndex] = useState(0);
  const technology = technologies[techIndex];

  return (
    <div className="tech_item-main">
      <div className="tech_item-image">
        <img
          src={`${technology.images.landscape}`}
          alt={`Image of ${technology.name}`}
        />
        <img
          src={`${technology.images.portrait}`}
          alt={`Image of ${technology.name}`}
        />
      </div>
      <div className="tech_item-content">
        <div className="tech_item-slider">
          {technologies.map((tech, index) => (
            <div
              className={`slider-2 ${techIndex === index ? "active" : ""}`}
              onClick={() => setTechIndex(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="tech_item-body">
          <div className="tech_item-title subheading-2">THE TERMINOLOGY...</div>
          <div className="tech_item-name heading-3">
            {technology.name.toUpperCase()}
          </div>
          <div className="tech_item-body body-text">
            {technology.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechItem;
