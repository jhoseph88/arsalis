import React from 'react';
import '../App.css';

const Email = props => {

    let formControl = "form-control";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div>
            <input type="email" className={formControl} {...props} />
        </div>
    );
}

export default Email;
