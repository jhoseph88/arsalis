import React, { Component } from 'react'

import Divider from './Divider'
import { iconStyle } from '../styles'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.backgroundRef = React.createRef()
  }

  render() {
    return (
      <div>
        <h1 className="centered-rows">Why choose Arsalis?</h1>
        <Divider id="mission-title" text="Our Mission"/>
        <div className="side-box" id="mission">
          <i className="fas fa-handshake" style={iconStyle}/>
          <p className="trans-box">
            We are committed to providing elegant, contemporary, affordable
            software solutions to those who have yet to hop on the tech bandwagon.
             We believe cloud computing lowers the barrier of entry for smaller
             organizations who lack the capital or the expertise to hire a
             full-time engineering team.
          </p>
        </div>
        <Divider id="values-title" text="Our Values"/>
        <div className="side-box" id="values">
          <p className="trans-box">
            We believe in getting to know our clients as individuals is a key
            prerequisite to building for them products they can understand,
            take pride in, and love. We see the ability to explain our systems
            to a less technical audience than us as part of the definition of
            a quality finished product.
          </p>
          <i className="fas fa-hand-holding-heart" style={iconStyle}/>
        </div>
        <Divider id="background-title" text="Our Background"/>
        <div className="side-box" id="background">
          <i className="fas fa-people-carry" style={iconStyle}/>
          <p className="trans-box">
            We are a small team of colleagues and friends who have come together
            under the common mission of sharing world-class technical systems to
            regular people like us. We have worked full-time for Fortune 500
            companies in fields including financial technology, healtchare,
            insurance, eCommerce, marketing, and small business. As technologists
            who have surveyed the state-of-the-art, we are prepared to bring to
            you years of hard-earned experience as well as a committment to stay
            up-to-date on the bleeding edge of scale, affordability, and
            simplicity.
          </p>
        </div>
      </div>
    )
  }
}
