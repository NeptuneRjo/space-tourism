import React, { useEffect, useState } from "react";
import { handleNav, CrewMember } from "../../Components";
import data from "../../data.json";
import "./crew.css";

const Crew = () => {
  const { crew } = data;

  return (
    <div className="crew-main">
      <div className="crew heading-5">
        <span>02</span>MEET YOUR CREW
      </div>
      <div className="crew-container">
        <CrewMember crew={crew} />
      </div>
    </div>
  );
};

export default Crew;
