import React, { useEffect } from 'react';
import handleNav from '../Navbar/handleNav';
import './destination.css';

const Destination = () => {

  useEffect(() => {
    handleNav(document.querySelector('.nav-destination'))
  }, []);
  
  return (
    <div className="space__destination"></div>
  )
}

export default Destination