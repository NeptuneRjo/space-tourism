import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="space__navbar">
      <div className="space__navbar-content">
        <div className="space__navbar-nav nav-home">
          <Link to="/">
            <p>00</p>Home
          </Link>
        </div>
        <div className="space__navbar-nav nav-destination">
          <Link to="/destination">
            <p>01</p>Destination
          </Link>
        </div>
        <div className="space__navbar-nav nav-crew">
          <Link to="/crew">
            <p>02</p>Crew
          </Link>
        </div>
        <div className="space__navbar-nav nav-technology">
          <Link to="/technology">
            <p>03</p>Technology
          </Link>
        </div>
      </div>
      <div className="space__navbar-content-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="space__navbar-content-menu slide-out">
            <div className="space__navbar-nav nav-home">
              <Link to="/">
                <p>00</p>Home
              </Link>
            </div>
            <div className="space__navbar-nav nav-destination">
              <Link to="/destination">
                <p>01</p>Destination
              </Link>
            </div>
            <div className="space__navbar-nav nav-crew">
              <Link to="/crew">
                <p>02</p>Crew
              </Link>
            </div>
            <div className="space__navbar-nav nav-technology">
              <Link to="/technology">
                <p>03</p>Technology
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
