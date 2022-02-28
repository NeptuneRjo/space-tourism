import React, { useEffect } from "react";
import { handleNav } from "..";
import "./home.css";

const Home = () => {
  useEffect(() => {
    handleNav(document.querySelector(".nav-home"));
  }, []);

  return (
    <div className="space__home">
      <div className="space__home-container">
        <div className="space__home-content">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="space__home-explore">
          <div className="space__home-explore-button">EXPLORE</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
