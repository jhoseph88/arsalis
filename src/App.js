import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <nav className="primary-nav">
          <Link to="/" className="logo-home"><img src={logo} alt="logo" width="200px"/></Link>
          <Link to="/about" clasName="page-links">About</Link>
          <Link to="/services" clasName="page-links">Services</Link>
          <Link to="/contact" clasName="page-links">Contact Us</Link>
        </nav>
      </Router>
    );
  }
}

export default App;
