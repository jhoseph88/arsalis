import React, {Component} from 'react'

import Divider from './Divider'
import { iconStyle } from '../styles'

export default class Services extends Component {
  constructor(props) {
    super(props)
    this.backgroundRef = React.createRef()
  }

  render() {
    return (
      <div id="services">
        <h1 className="centered-rows">We Come to YOU</h1>
        <Divider text="Full-Stack Web Applicaiton"/>
        <div className="side-box" id="full-stack">
          <i className="fas fa-handshake" style={iconStyle}/>
          <p className="trans-box">
            Cameron to help ...
          </p>
        </div>
        <Divider text="Cloud Migration & Consulting"/>
        <div className="side-box" id="full-stack">
          <p className="trans-box">
            Cameron to help ...
          </p>
          <i className="fas fa-handshake" style={iconStyle}/>
        </div>
        <Divider text="Mobile Applications"/>
        <div className="side-box" id="full-stack">
          <i className="fas fa-handshake" style={iconStyle}/>
          <p className="trans-box">
            Cameron to help ...
          </p>
        </div>
        <Divider text="Data Solutions"/>
        <div className="side-box" id="full-stack">
          <p className="trans-box">
            Cameron to help ...
          </p>
          <i className="fas fa-handshake" style={iconStyle}/>
        </div>
        <Divider text="DevOps - Infrastructure & Deployment"/>
        <div className="side-box" id="full-stack">
          <i className="fas fa-handshake" style={iconStyle}/>
          <p className="trans-box">
            Cameron to help ...
          </p>
        </div>
      </div>
    )
  }
}
