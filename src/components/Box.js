import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'

export default function Box(props) {
  const boxStyle = {
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
  const iconStyle = {
    fontSize: '64px',
    display: 'inline-flex',
    justifyContent: 'center'
  }
  return (
    <Link style={ boxStyle } to={ `${props.page}${props.anchor}` }>
      <h2>{ props.title }</h2>
      <i className={ props.icon } style={ iconStyle }/>
      <h6>{ props.body }</h6>
    </Link>
  )
}
