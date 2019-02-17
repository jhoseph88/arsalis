import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { stack as Menu } from 'react-burger-menu'
import ScrollUpButton from 'react-scroll-up-button'

import logo from './logo.png'
import './App.css'
import background from './background_flipped.png'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.contactRef = React.createRef()

    this.scrollToMyRef = this.scrollToRef.bind(this)
  }

  scrollToRef(ref) {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
 }

 render() {
  return (
    <div id="home"
      className="App"
      style={{ background: `linear-gradient(rgba(255,255,255, .7), rgba(255,255,255)), url(${background})`, backgroundSize: 'cover'}}>
      <Menu id="menu" right>
        <Link id="menu-about" to="/about" className="page-links">
          <i className="fas fa-info-circle"/>About
        </Link>
        <Link id="menu-service" to="/services" className="page-links">
          <i className="fas fa-briefcase"/>Services
        </Link>
        <Link id="menu-contact-us" to="/" className="page-links" onClick={ () => this.scrollToRef(this.contactRef) }>
          <i className="fas fa-question-circle"/>Contact Us
        </Link>
      </Menu>
      <Link to="/" className="logo-home">
        <img src={logo} alt="logo" width="200px" height="56px"/>
      </Link>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <div className="divider">
        <span className="broken-hr"/>
        <span className="divider-title">Contact Us</span>
        <span className="broken-hr"/>
      </div>
      <div className="contact-background" id="contact" ref={ this.contactRef }>
        <Contact id="contact-form"/>
        <div className="centered-rows">
          <p id="address" className="footer-elt">4917 Sadler Glen Ct, Glen Allen VA 23060</p>
          <p id="phone" className="footer-elt">(804) 937-8481</p>
          <p id="email" className="footer-elt">admin@arsalis.rog</p>
        </div>
        <div>
          <ScrollUpButton ShowAtPosition={25} EasingType='linear' ToggledStyle={{left: '3%', right: 'auto'}} style={{height: '30px', width: '30px'}}/>
        </div>
      </div>
    </div>
    )
  }
}
