import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

export default class Notfound extends Component {
  render() {
    return (
      <div className="notfound-main">
        <h1 className="notfound-header">Error! This page does not exist.</h1>
        <Link to='/'>Try this page instead...</Link>
      </div>
    )
  }
}
