import React from 'react';


 const Icon = props => {
    const { name } = props;
    return (
        <i className="material-icons" >
            {name}
        </i>
    );
};
export default Icon;