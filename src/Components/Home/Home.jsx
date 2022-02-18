import React, { useEffect } from 'react'
import { handleNav } from '..';
import './home.css';

const Home = () => {

  useEffect(() => {
    handleNav(document.querySelector('.nav-home'))
  }, []);

  return (
    <div className="space__home"></div>
  )
}

export default Home