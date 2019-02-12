import React from 'react';
import '../App.css';

const Message = props => {

    let formControl = "form-control";
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div>
            <input type="message" className={formControl} {...props} />
        </div>
    );
}

export default Message;
