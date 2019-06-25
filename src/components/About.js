import React, { Component } from 'react'

import Divider from './Divider'
import IconInfo from './IconInfo'
import { about } from '../constants'

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
        <IconInfo icon='fa-handshake' color='#2E83EB' content={about.mission}/>
        <Divider id="values-title" text="Our Values"/>
        <IconInfo icon='fa-hand-holding-heart' color='#EB4D2D' content={about.values} after/>
        <Divider id="background-title" text="Our Background"/>
        <IconInfo icon='fa-people-carry' color='#74F19E' content={about.background}/>
      </div>
    )
  }
}
