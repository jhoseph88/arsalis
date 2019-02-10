import React from 'react'

import { Link } from "react-router-dom"

export default function Box(props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: "20px",
    backgroundColor: "lightgray",
    width: "225px",
    height: "225px"
  }
  return (
    <Link className="Box" style={ style } to={ props.page }>
      <h2>{ props.title }</h2>
      <i className={ props.icon } style={{ fontSize: "64px", display: "inline-flex", justifyContent: 'center' }}/>
      <h6>{ props.body }</h6>
    </Link>
  )
}
