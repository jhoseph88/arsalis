import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <nav>
          <div className="logo-home">
            <Link to="/"><img src={logo} alt="logo" width="200px"/></Link>
          </div>
          <div className="page-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
      </Router>
    );
  }
}

export default App;
