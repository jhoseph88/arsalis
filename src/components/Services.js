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
          The cloud computing revolution has allowed tiny start-ups and
          multi-national corporations alike to scale their computing and
          storage infrastructures on an as-needed basis. We are excited to help
          you strategize and implement cloud systems which will jumpstart your
          business and save you time and money.
        </p>
        <i className="fas fa-cloud" style={iconStyle}/>
      </div>
      <Divider text="Mobile Applications"/>
      <div className="side-box" id="mobile">
        <i className="fas fa-mobile-alt" style={iconStyle}/>
        <p className="trans-box">
          If a mobile-friendly website doesn't cover your business
          requirements, we would be happy to build you a contemporary,
          cross-platform mobile application. Because of our philosphy of
          simplicity and cross-platform functionality, we prefer tools like
          React Native and Flutter. However, we are flexible when it comes to
          languages and frameworks. We are here to serve you, and we are open
          to leveraging any technologies which will fit your use case.
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
