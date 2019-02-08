import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { stack as Menu } from 'react-burger-menu'
import logo from './logo.png';
import './App.css';
import background from './background.png';

class App extends Component {
  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        <Router className="App">
          <div>
            <Menu right>
              <Link to="/about" className="page-links">About</Link>
              <Link to="/services" className="page-links">Services</Link>
              <Link to="/contact" className="page-links">Contact Us</Link>
            </Menu>
            <Link to="/" className="logo-home">
              <img src={logo} alt="logo" width="200px" height="56px"/>
            </Link>
            <p className="slogan">
              <span id="human">Humans</span> helping <span id="human">humans</span>. <span id="it">IT</span> is just what we do...
            </p>
            </div>
        </Router>
        <Router className="App">
        <div>
          <img src={background} alt="Background Image"/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
