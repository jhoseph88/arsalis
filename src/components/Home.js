import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import Box from './Box'
import Divider from './Divider'

const buttonStyle = {
  backgroundColor: 'gray',
  color: 'lightgray',
  width: '30%',
  margin: '20px',
  textAlign: 'center',
  fontWeight: 'bold'
}

export default function Home(props) {
  return (
    <div>
      <p className="slogan">
        <span id="human">Humans</span> helping <span id="human">humans</span>. <span id="it">IT</span> is just what we do...
      </p>
      <Divider text="Our Services"/>
      { /* TODO - links should link to areas of service page which detail individual service */ }
      <div className="boxes">
        <Box title="Full Stack"
          id="box-full-stack"
          icon="fas fa-laptop-code"
          page="services"
          body="We are a one-stop shop for all your application development needs."
          anchor="#full-stack"/>
        <Box title="Cloud Migration"
          id="box-cloud-migration"
          icon="fas fa-cloud"
          page="services"
          body="Elasticity, scalability, affordability ... We've got you covered."
          anchor="#cloud"/>
      <Box title="Data Solutions"
          id="box-data-solutions"
          icon="fas fa-database"
          page="services"
          body="ETL, pipelines, warehousing, and much more..."
          anchor="#data"/>
      </div>
      <p className="slogan">
        Ready to find out more?
      </p>
      <div className="centered-rows">
        <Link id="our-background" to="/about#background" style={ buttonStyle }>
          <p>Our Background</p>
        </Link>
        <Link id ="our-offer" to="/about#mission" style={ buttonStyle }>
          <p>What We Offer</p>
        </Link>
      </div>
    </div>
  )
}
