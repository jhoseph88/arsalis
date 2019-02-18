import React from 'react'

import Divider from './Divider'
import { iconStyle } from '../styles'

export default function Services(props) {
  return (
    <div id="services">
      <h1 className="centered-rows">We Come to YOU</h1>
      <Divider text="Full-Stack Web Applications"/>
      <div className="side-box" id="full-stack">
        <i className="fas fa-laptop-code" style={iconStyle}/>
        <p className="trans-box">
          Whether you are looking to expand, update, or redefine your online
          presence, we will work closely and diligently with you to understand
          your goals and aspirations. Our aim is to help you along in your
          journey of building a web site or service which you feel represents
          your personality and values. Whether it's an internal tool or a
          customer-facing web app, we will apply the most elegant,
          cutting-edge technologies in our toolkit to deliver the application
          you need.
        </p>
      </div>
      <Divider text="Cloud Migration & Consulting"/>
      <div className="side-box" id="cloud">
        <p className="trans-box">
          Cameron to help ...
        </p>
        <i className="fas fa-cloud" style={iconStyle}/>
      </div>
      <Divider text="Mobile Applications"/>
      <div className="side-box" id="mobile">
        <i className="fas fa-mobile-alt" style={iconStyle}/>
        <p className="trans-box">
          Cameron to help ...
        </p>
      </div>
      <Divider text="Data Solutions"/>
      <div className="side-box" id="data">
        <p className="trans-box">
          Cameron to help ...
        </p>
        <i className="fas fa-database" style={iconStyle}/>
      </div>
      <Divider text="DevOps - Infrastructure & Deployment"/>
      <div className="side-box" id="dev-ops">
        <i className="fas fa-cogs" style={iconStyle}/>
        <p className="trans-box">
          Cameron to help ...
        </p>
      </div>
    </div>
  )
}
