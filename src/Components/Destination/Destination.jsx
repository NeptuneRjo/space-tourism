import React, { useEffect, useState } from 'react';
import handleNav from '../Navbar/handleNav';
import data from '../../data.json';
import './destination.css';
import { moonImage, titanImage, marsImage, europaImage } from '../../Assets/destination/index'; // Images


const Destination = () => {

  const destination = data.destinations;
  const [index, setIndex] = useState(0);

  // const handleClick = (selectedDestination) => {
  //   const navs = document.querySelectorAll('')
  //   const navContainer = document.querySelector('')

  //   for (let i = 0; i < navs.length; i++) {
  //     navs[i].classList.remove('selected-nav')
  //   }

  //   selectedNav.classList.add('selected-nav')
  // }

  useEffect(() => {
    handleNav(document.querySelector('.nav-destination'))
  }, []);

  return (
    <div className='destination-main'>
      <div className="destination-header">
        <p>01</p>PICK YOUR DESTINATION</div>
      <div className="destination-container">
        <div className="destination-image"><img src={moonImage}/></div>
        <div className="destination-content">
          <div className="destination-nav">
            <div className="destination-nav-item nav-moon">MOON</div>
            <div className="destination-nav-item nav-mars">MARS</div>
            <div className="destination-nav-item nav-europa">EUROPA</div>
            <div className="destination-nav-item nav-titan">TITAN</div>
          </div>
          <h2 className="destination-title">{destination[index].name}</h2>
          <p className="destination-text">{destination[index].description}</p>
          <div className="destination-stats">
            <div className="destination-distance">
              <div>AVG. DISTANCE</div>
              <p>{destination[index].distance}</p>
            </div>
            <div className="destination-time">
              <div>EST. TRAVEL TIME</div>
              <p>{destination[index].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination