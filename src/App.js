import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { stack as Menu } from 'react-burger-menu'
import ScrollUpButton from 'react-scroll-up-button'

import logo from './logo_new.png'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Divider from './components/Divider'
import { scrollToRef } from './utils/helpers'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.contactRef = React.createRef()
    this.state = { menuOpen: false }

    this.closeMenu = this.closeMenu.bind(this)
  }

  // This is used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  handleStateChange(newState) {
    window.setTimeout(() => { // This is necessary to force the blur to happen after in the event loop
      if (newState.isOpen) {
        document.activeElement.blur()
      }
    })
  }

  render() {
    return (
      <div id="home" className="App">
        <Menu id="menu"
          isOpen={ this.state.menuOpen }
          onStateChange={ this.handleStateChange }
          right>
          <Link id="menu-home" to="/" className="page-links">
            <i className="fas fa-home"/>Home
          </Link>
          <Link id="menu-about" to="/about" className="page-links" onClick={ this.closeMenu }>
            <i className="fas fa-info-circle"/>About
          </Link>
          <Link id="menu-service" to="/services" className="page-links" onClick={ this.closeMenu }>
            <i className="fas fa-briefcase"/>Services
          </Link>
          <Link id="menu-contact-us"
            smooth to="#contact"
            className="page-links"
            onClick={ () => { this.closeMenu(); scrollToRef(this.contactRef) } }>
            <i className="fas fa-question-circle"/>Contact Us
          </Link>
        </Menu>
        <Link to="/" className="logo-home">
          <img src={logo} alt="logo" width="200px"/>
        </Link>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Divider text="Contact Us"/>
        <div className="contact-background" id="contact" ref={ this.contactRef }>
          <Contact id="contact-form"/>
          <div className="centered-rows">
            <p id="address" className="footer-elt">4917 Sadler Glen Ct, Glen Allen VA 23060</p>
            <p id="phone" className="footer-elt">(804) 937-8481</p>
            <p id="email" className="footer-elt">admin@arsalis.org</p>
            <p id="copyright" className="footer-elt">© Arsalis 2019</p>
          </div>
        </div>
        <div>
          <ScrollUpButton
            ShowAtPosition={25}
            EasingType='linear'
            style={{height: '30px', width: '30px'}}/>
        </div>
      </div>
    )
  }
}
