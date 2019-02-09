import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { stack as Menu } from 'react-burger-menu'
import Box from './components/Box'
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
              <div className="divider">
                <span className="broken-hr"/>
                <span className="divider-title">Our Services</span>
                <span className="broken-hr"/>
              </div>
              { /* TODO - links should link to areas of service page which detail individual service */ }
              <div className="boxes">
                <Box title="Full Stack"
                  icon="important_devices"
                  page="services"
                  body="We are a one-top shop for all your application development needs."/>
                <Box title="Cloud Migration"
                  icon="cloud"
                  page="services"
                  body="Elasticity, scalability, affordability ... We've got you covered."/>
                <Box title="Data Solutions"
                  icon="dns"
                  page="services"
                  body="ETL, pipelines, warehousing, and much more... "/>
              </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
