import React from 'react'

import Divider from './Divider'
import IconInfo from './IconInfo'
import { services } from '../constants'

export default function Services(props) {
  return (
    <div id="services">
      <h1 className="centered-rows">We Come to YOU</h1>
      <Divider id="full-stack-title" text="Full-Stack Web Applications"/>
      <IconInfo id="full-stack" icon='fa-laptop-code' content={services.web}/>
      <Divider id="cloud-title" text="Cloud Migration & Consulting"/>
      <IconInfo id="cloud" icon='fa-cloud' content={services.cloud} after/>
      <Divider id="mobile-title" text="Mobile Applications"/>
      <IconInfo id="mobile" icon='fa-mobile-alt' content={services.mobile}/>
      <Divider id="data-title" text="Data Solutions"/>
      <IconInfo id="data" icon='fa-database' content={services.data} after/>
      <Divider id="dev-ops-title" text="DevOps - Infrastructure & Deployment"/>
      <IconInfo id="dev-ops" icon='fa-cogs' content={services.devops}/>
    </div>
  )
}
