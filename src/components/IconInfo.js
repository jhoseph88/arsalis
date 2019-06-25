import React from 'react'
import Card from '@material-ui/core/Card'

import { iconStyle } from '../styles'

export default function IconInfo(props) {
  return (
    <div style={{ display: 'flex', margin: '0px 40px' }}>
      { !props.after && <i className={`fas ${props.icon}`} style={iconStyle}/> }
      <Card className="side-box" id="values" style={{ backgroundColor: props.color, color: 'white' }}>
        {props.content}
      </Card>
      { props.after && <i className={`fas ${props.icon}`} style={iconStyle}/> }
    </div>
  )
}
