import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { stack as Menu } from 'react-burger-menu'

import Box from './components/Box'
import logo from './logo.png'
import './App.css'
import background from './background_flipped.png'
import Contact from './components/Contact'


const buttonStyle = {
  backgroundColor: 'gray',
  color: 'lightgray',
  width: '30%',
  margin: '20px',
  textAlign: 'center',
  fontWeight: 'bold'
}

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
      <div id="home" className="App" style={{ background: `linear-gradient(rgba(255,255,255, .7), rgba(255,255,255)), url(${background})`, backgroundSize: 'cover'}}>
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
            id="box-full-stack"
            icon="fas fa-laptop-code"
            page="services"
            body="We are a one-stop shop for all your application development needs."/>
          <Box title="Cloud Migration"
            id="box-cloud-migration"
            icon="fas fa-cloud"
            page="services"
            body="Elasticity, scalability, affordability ... We've got you covered."/>
          <Box title="Data Solutions"
            id="box-data-solutions"
            icon="fas fa-database"
            page="services"
            body="ETL, pipelines, warehousing, and much more... "/>
        </div>
        <p className="slogan">
          Ready to find out more?
        </p>
        <div className="centered-rows">
          <Link id="our-background" to="/about" style={ buttonStyle }>
            <p>Our Background</p>
          </Link>
          <Link id ="our-offer" to="/about" style={ buttonStyle }>
            <p>What We Offer</p>
          </Link>
        </div>
        <div className="divider">
          <span className="broken-hr"/>
          <span className="divider-title">Contact Us</span>
          <span className="broken-hr"/>
        </div>
        <div className="contact-background" id="contact" ref={ this.contactRef }>
          <Contact id="contact-form"/>
          <div class="centered-rows">
            <p id="address" className="footer-elt">4917 Sadler Glen Ct, Glen Allen VA 23060</p>
            <p id="phone" className="footer-elt">(804) 937-8481</p>
            <p id="email" className="footer-elt">admin@arsalis.rog</p>
          </div>
        </div>
      </div>
    )
  }
}
