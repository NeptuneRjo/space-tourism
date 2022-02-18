import React, { useEffect } from 'react';
import handleNav from '../Navbar/handleNav';
import './crew.css';

const Crew = () => {

  useEffect(() => {
    handleNav(document.querySelector('.nav-crew'))
  }, []);

  return (
    <div>Crew</div>
  )
}

export default Crew