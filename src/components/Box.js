import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/Card'

import { boxStyle, iconStyle } from '../styles'

export default function Box(props) {
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
