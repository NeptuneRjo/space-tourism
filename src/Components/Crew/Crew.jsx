import React, { useEffect, useState } from 'react';
import handleNav from '../Navbar/handleNav';
import data from '../../data.json';
import './crew.css';
import { hurley, ansari, shuttleworth, glover } from '../../Assets/crew/index';

const Crew = () => {

  const crew = data.crew

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(hurley);

  const handleCrew = (currentMember) => {
    const members = document.querySelectorAll('.crew-nav-member');

    for (let i = 0; i < members.length; i++) {
      members[i].classList.remove('selected-member')
    }

    currentMember.classList.add('selected-member')
  }

  useEffect(() => {
    handleNav(document.querySelector('.nav-crew'))
    handleCrew(document.querySelector('.nav-hurley'))
  }, []);

  return (
    <div className="crew-main">
      <div className="crew-content">
        <div className="crew-header"><p>02</p>MEET YOUR CREW</div>
        <h4 className="crew-role">{crew[index].role}</h4>
        <h3 className="crew-name">{crew[index].name}</h3>
        <div className="crew-description">{crew[index].bio}</div>
        <div className="crew-nav">
          <div 
            className="crew-nav-member nav-hurley" 
            onClick={
              (e) => {handleCrew(e.target); 
                      setIndex(0); 
                      setImage(hurley)}
              }></div>
          <div 
            className="crew-nav-member nav-shuttleworth" 
            onClick={
              (e) => {handleCrew(e.target); 
                      setIndex(1);
                      setImage(shuttleworth)}
              }></div>
          <div 
            className="crew-nav-member nav-glover" 
            onClick={
              (e) => {handleCrew(e.target); 
                      setIndex(2); 
                      setImage(glover)}
            }></div>
          <div 
            className="crew-nav-member nav-ansari" 
            onClick={
              (e) => {handleCrew(e.target); 
                      setIndex(3);
                      setImage(ansari)}
            }></div>
        </div>
      </div>
      <div className="crew-image"><img src={image} /></div>
    </div>
  )
}

export default Crew