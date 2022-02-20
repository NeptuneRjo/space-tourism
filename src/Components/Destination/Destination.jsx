import React, { useEffect, useState } from 'react';
import handleNav from '../Navbar/handleNav';
import data from '../../data.json';
import './destination.css';
import { moonImage, titanImage, marsImage, europaImage } from '../../Assets/destination/index'; // Images


const Destination = () => {

  const destination = data.destinations;

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(moonImage)

  const handleClick = (selectedDestination) => {
    const navs = document.querySelectorAll('.destination-nav-item')

    for (let i = 0; i < navs.length; i++) {
      navs[i].classList.remove('selected-nav')
    }

    selectedDestination.classList.add('selected-nav')
    // console.log(selectedDestination)
    // console.log(navs)
  }

  useEffect(() => {
    handleNav(document.querySelector('.nav-destination'))
    handleClick(document.querySelector('.nav-moon'));
  }, []);

  return (
    <div className='destination-main'>
      <div className="destination-header">
        <p>01</p>PICK YOUR DESTINATION</div>
      <div className="destination-container">
        <div className="destination-image"><img src={image}/></div>
        <div className="destination-content">
          <div className="destination-nav">
            <div 
              className="destination-nav-item nav-moon" 
              onClick={
                (e) => {handleClick(e.target); 
                        setIndex(0); 
                        setImage(moonImage)}
                }>
                MOON</div>
            <div 
              className="destination-nav-item nav-mars"
              onClick={
                (e) => {handleClick(e.target); 
                        setIndex(1); 
                        setImage(marsImage)}
                }>
                MARS</div>
            <div 
              className="destination-nav-item nav-europa" 
              onClick={
                (e) => {handleClick(e.target); 
                        setIndex(2); 
                        setImage(europaImage)}
                }>
                EUROPA</div>
            <div 
              className="destination-nav-item nav-titan" 
              onClick={
                (e) => {handleClick(e.target); 
                        setIndex(3); 
                        setImage(titanImage)}
                }>
                TITAN</div>
          </div>
          <h2 className="destination-title">{destination[index].name}</h2>
          <div className="destination-text"><p>{destination[index].description}</p></div>
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