import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Button from '@material-ui/core/Button'

const buttonStyle = {
  backgroundColor: '#EB4D2D',
  width: '30%',
  margin: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: '0px'
}

export default function InfoTab(props) {
  return (
    <Button variant="contained" style={ buttonStyle }>
      <Link to={props.path} style={{ width: '100%' }}>
        <p style={{ color: 'white' }}>{props.title}</p>
      </Link>
    </Button>
  )
}
