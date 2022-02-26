import React, { useEffect, useState } from 'react';
import handleNav from '../Navbar/handleNav';
import './technology.css';
import data from '../../data.json';


const Technology = () => {

  const technology = data.technology;

  const [index, setIndex] = useState(0);
  const [imageClass, setImageClass] = useState('launchVehicle')

  const handleClick = (currentTech) => {
    const navs = document.querySelectorAll('.technology-nav-item')
    const image = document.querySelector('.technology-image')

    for (let i = 0; i < navs.length; i++) {
      navs[i].classList.remove('selected-tech')
    }

    currentTech.classList.add('selected-tech');
  }

  useEffect(() => {
    handleNav(document.querySelector('.nav-technology'))
    handleClick(document.querySelector('.nav1'));
  }, []);

  return (
    <div className="technology-main">
      <div className="technology-header"><p>03</p>SPACE LAUNCH 101</div>
      <div className="technology-container">
        <div className={'technology-image ' + imageClass}></div>
        <div className="technology-content">
          <div className="technology-nav">
            <div className="technology-nav-item nav1" 
              onClick={
                (e) => {handleClick(e.target);
                        setIndex(0);
                        setImageClass('launchVehicle');}
              }>1</div>
            <div className="technology-nav-item nav2"
              onClick={
                (e) => {handleClick(e.target);
                        setIndex(1);
                        setImageClass('spacePort');}
              }>2</div>
            <div className="technology-nav-item nav3" 
              onClick={
                (e) => {handleClick(e.target);
                        setIndex(2);
                        setImageClass('spaceCapsule');}
              }>3</div>
          </div>
          <div className="technology-info">
            <div className="technology-subheader">THE TERMINOLOGY...</div>
            <h3 className="technology-title">{technology[index].name}</h3>
            <p className="technology-description">{technology[index].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology;
