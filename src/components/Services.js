import React from 'react'

import Divider from './Divider'
import { iconStyle } from '../styles'

export default function Services(props) {
  return (
    <div id="services">
      <h1 className="centered-rows">We Come to YOU</h1>
      <Divider id="full-stack-title" text="Full-Stack Web Applications"/>
      <div className="side-box" id="full-stack">
        <i className="fas fa-laptop-code" style={iconStyle}/>
        <p className="trans-box">
          Whether you are looking to expand, update, or redefine your online
          presence, we will work closely and diligently with you to understand
          your goals and aspirations before writing a single line of code. Our aim is to help you along in your
          journey of building a web site or service which you feel represents
          your personality and values. Whether it's an internal tool or a
          customer-facing web app, we will apply the most elegant,
          cutting-edge technologies in our toolkit to deliver applications
          tailor-made to your needs.
        </p>
      </div>
      <Divider id="cloud-title" text="Cloud Migration & Consulting"/>
      <div className="side-box" id="cloud">
        <p className="trans-box">
          The cloud computing revolution has allowed tiny start-ups and
          multi-national corporations alike to scale their computing and
          storage infrastructures on an as-needed basis. We are excited to help
          you strategize and implement cloud systems which will jumpstart your
          business while saving you time and money.
        </p>
        <i className="fas fa-cloud" style={iconStyle}/>
      </div>
      <Divider id="mobile-title" text="Mobile Applications"/>
      <div className="side-box" id="mobile">
        <i className="fas fa-mobile-alt" style={iconStyle}/>
        <p className="trans-box">
          If a mobile-friendly website doesn't cover your business
          requirements, we would be happy to build you a contemporary,
          cross-platform mobile application. Tools like React Native and
          Flutter align best with our philosphy of simplicity, ease-of-use, and
          cross-platform functionality. However, we are flexible when it comes
          to languages and frameworks. Fundamentally, we are here to serve you,
          and we are open to leveraging any technologies which will fit your
          use case.
        </p>
      </div>
      <Divider id="data-title" text="Data Solutions"/>
      <div className="side-box" id="data">
        <p className="trans-box">
          Data is the currency of the twenty-first century. We understand that
          parlaying your organization's data is a vital component to a healthy
          tech-literate business. We are here to help you store, organize,
          transform, and analyze your data affordably, efficiently, and
          ethically in a secure cloud environment.
        </p>
        <i className="fas fa-database" style={iconStyle}/>
      </div>
      <Divider id="dev-ops-title" text="DevOps - Infrastructure & Deployment"/>
      <div className="side-box" id="dev-ops">
        <i className="fas fa-cogs" style={iconStyle}/>
        <p className="trans-box">
          Let us help you automate your tedious system administration tasks so
          you can spend your precious time getting work done, not maintaining
          fragile configurations. We will provide you with infrastructure as
          code which will help you maintain a clean, efficient, and modular
          cloud environment. Want to move to a DevOps or YBYO paradigm? We will
          provide training and information best practices to put you on the
          same page with the industry leaders in automation.
        </p>
      </div>
    </div>
  )
}
