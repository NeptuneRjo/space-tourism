import React, { useEffect, useState } from 'react';
import handleNav from '../Navbar/handleNav';
import './technology.css';
import data from '../../data.json';


const Technology = () => {

  const technology = data.technology;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    handleNav(document.querySelector('.nav-technology'))
  }, []);

  return (
    <div className="technology-main">
      <div className="technology-container">
        <h5 className="technology-header"><p>03</p>SPACE LAUNCH 101</h5>
        <div className="technology-content">
          <div className="technology-nav">
            <div className="technology-nav-item nav1">1</div>
            <div className="technology-nav-item nav2">2</div>
            <div className="technology-nav-item nav3">3</div>
          </div>
          <div className="technology-info">
            <div className="technology-subheader">THE TERMINOLOGY...</div>
            <h3 className="technology-title">{technology[index].name}</h3>
            <p className="technology-description">{technology[index].description}</p>
          </div>
        </div>
      </div>
      <div className="technology-image"></div>
    </div>
  )
}

export default Technology;
