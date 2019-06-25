import React from 'react'

import Box from './Box'
import Divider from './Divider'
import InfoTab from './InfoTab'

export default function Home(props) {
  return (
    <div>
      <p className="slogan">
        <span id="human">Humans</span> helping <span id="human">humans</span>. <span id="it">IT</span> is just what we do...
      </p>
      <Divider text="Our Services"/>
      <div className="boxes">
        <Box title="Full Stack"
          id="box-full-stack"
          icon="fas fa-laptop-code"
          page="services"
          body="We are a one-stop shop for all your application development needs."
          anchor="#full-stack-title"/>
        <Box title="Cloud Migration"
          id="box-cloud-migration"
          icon="fas fa-cloud"
          page="services"
          body="Elasticity, scalability, affordability ... We've got you covered."
          anchor="#cloud-title"/>
        <Box title="Data Solutions"
          id="box-data-solutions"
          icon="fas fa-database"
          page="services"
          body="ETL, pipelines, warehousing, and much more..."
          anchor="#data-title"/>
      </div>
      <p className="slogan">Ready to find out more?</p>
      <div className="centered-rows">
        <InfoTab id='our-background' path={'/about#background-title'} title={'Our Background'}/>
        <InfoTab id ="our-offer" path={'/about#mission-title'} title={'Our Offer'}/>
      </div>
    </div>
  )
}
