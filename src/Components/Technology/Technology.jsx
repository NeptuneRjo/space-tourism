import React, { useEffect } from 'react';
import handleNav from '../Navbar/handleNav';
import './technology.css';


const Technology = () => {

  useEffect(() => {
    handleNav(document.querySelector('.nav-technology'))
  }, []);

  return (
    <div>Technology</div>
  )
}

export default Technology;
