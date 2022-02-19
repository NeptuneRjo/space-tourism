import React, { useEffect, useState } from 'react';
import handleNav from '../Navbar/handleNav';
import './destination.css';
import data from '../../data.json'


const Destination = () => {

  const destination = data.destinations;
  const index = 0;
  console.log(destination)

  useEffect(() => {
    handleNav(document.querySelector('.nav-destination'))
  }, []);

  return (
    <div className="destination-main">
      <div className="destination-header">
        <p>01</p>PICK YOUR DESTINATION</div>
      <div className="destination-container">
        <div className="destination-image">
          <img src='#' alt='#' />
        </div>
        <div className="destination-content">
          <div className="destination-nav"></div>
          <h2>{destination[index].name}</h2>
          <p>{destination[index].description}</p>
          <div className="destination-stats">
            <div className="destination-states">
              <div className="destination-distance"></div>
              <p></p>
              <h5></h5>
            </div>
            <div className="destination-time">
              <p></p>
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination