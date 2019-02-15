import React from 'react';
import '../App.css';

export default function TextArea(props) {

  let formControl = "form-control"
  if (props.touched && !props.valid) {
    formControl = 'form-control control-error'
  }

  return (
      <textarea className={formControl} {...props}/>
  )

}
