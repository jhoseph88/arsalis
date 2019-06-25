import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/Card'

export default function Box(props) {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "#2E83EB",
    color: "#74F19E",
    width: "225px",
    height: "225px"
  }
  const iconStyle = {
    fontSize: '64px',
    display: 'inline-flex',
    justifyContent: 'center',
    color: '#01f1a0'
  }
  return (
    <Card style={{ margin: '20px' }} raised={ true }>
      <CardContent style={ boxStyle }>
        <Link to={ `${props.page}${props.anchor}` }>
          <h2 style={{ color: 'white' }}>{ props.title }</h2>
          <i className={ props.icon } style={ iconStyle }/>
          <h6 style={{ color: 'white' }}>{ props.body }</h6>
        </Link>
      </CardContent>
    </Card>
  )
}
