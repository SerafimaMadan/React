import React from 'react';


const IconSwitch = props => {
    const {icon, onSwitch} = props;

    return (
        <div className="switch-view" onClick={onSwitch}>
            <i className="material-icons" />
            <i className="material-icons" />
        </div>
    );
};
export default IconSwitch;