import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { stack as Menu } from 'react-burger-menu'
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        <Router className="App">
          <div>
            <Menu right>
              <Link to="/about" className="page-links">
                <i class="material-icons">info</i>About
              </Link>
              <Link to="/services" className="page-links">
                <i class="material-icons">work</i>Services
              </Link>
              <Link to="/contact" className="page-links">
                <i class="material-icons">contact_support</i>Contact Us
              </Link>
            </Menu>
            <Link to="/" className="logo-home">
              <img src={logo} alt="logo" width="200px" height="56px"/>
            </Link>
            <p className="slogan">
              <span id="human">Humans</span> helping <span id="human">humans</span>. <span id="it">IT</span> is just what we do...
            </p>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
