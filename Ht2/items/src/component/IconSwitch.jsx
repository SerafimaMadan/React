import React from 'react';
import PropTypes from 'prop-types';

    const IconSwitch = props => {
    const {icon, onSwitch} = props;


    const handleClick = () => {
        onSwitch(icon);
    };

    return <i className="material-icons" onClick={handleClick}>{icon}</i>
};

    IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
};
export default IconSwitch;