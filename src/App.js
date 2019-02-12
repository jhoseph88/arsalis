import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import Box from './components/Box'
import logo from './logo.png'
import './App.css'
import background from './background_flipped.png';
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Router className="App">
<<<<<<< HEAD
          <div style={{ background: `linear-gradient(rgba(255,255,255, .80), rgba(255,255,255)), url(${background})`}}>
=======
          <div style={{ background: `linear-gradient(rgba(255,255,255, .5), rgba(255,255,255)), url(${background})`, backgroundSize: 'cover'}}>
>>>>>>> 73726dcb59d8ec1d9d7c866fd34c0e3de0403a5b
            <Menu right>
              <Link to="/about" className="page-links">
                <i className="fas fa-info-circle"/>About
              </Link>
              <Link to="/services" className="page-links">
                <i className="fas fa-briefcase"/>Services
              </Link>
              <Link to="/contact" className="page-links">
                <i className="fas fa-question-circle"/>Contact Us
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
                icon="fas fa-laptop-code"
                page="services"
                body="We are a one-stop shop for all your application development needs."/>
              <Box title="Cloud Migration"
                icon="fas fa-cloud"
                page="services"
                body="Elasticity, scalability, affordability ... We've got you covered."/>
              <Box title="Data Solutions"
                icon="fas fa-database"
                page="services"
                body="ETL, pipelines, warehousing, and much more... "/>
            </div>
            <div className="divider">
              <span className="broken-hr"/>
              <span className="divider-title">Contact Us</span>
              <span className="broken-hr"/>
            </div>
            <div className="contact-background">
              <div>
              <Contact/>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
