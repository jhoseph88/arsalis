import React from 'react';
import '../App.css';

const Email = props => {

    let formControl = "form-control";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
            <input type="email" className={formControl} {...props} />
    );
}

export default Email;
