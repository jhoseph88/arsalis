import React from 'react';
import '../App.css';

export default function TextInput(props) {

  let formControl = "form-control"
  if (props.touched && !props.valid) {
    formControl = 'form-control control-error'
  }

  return (
      <input type="text" className={formControl} {...props}/>
  )

}
