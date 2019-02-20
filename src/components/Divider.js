import React from 'react'

export default function Divider(props) {
  return (
    <div className="divider">
      <span className="broken-hr"/>
      <span id={props.id} className="divider-title">{ props.text }</span>
      <span className="broken-hr"/>
    </div>
  )
}
