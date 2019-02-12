import React from 'react';
import '../App.css';

const TextInput = (props) => {

  let formControl = "form-control";
  if(props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div>
      <input type="text" className={formControl} {...props} />
    </div>
  );
}

export default TextInput;
