import React from 'react';

const Input = props => {

    function onChange(e) {
        props.onChange(e.currentTarget.value);
    }

//создадим input для записи цвета
    return (
        <input
            value={props.value}
            onChange={onChange}
            type="text"
            className="hex-field js-hex-field"
            placeholder="#333333"/>
    );
};
export default Input;