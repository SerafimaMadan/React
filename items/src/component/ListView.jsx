import React from 'react';

const ListView = props => {
    const items = props.items;

    return (
        <ul>
            {items.map(o => <li>
                <img src={o.img} alt={o.name} />
            </li>)}
        </ul>
    );
};
export default ListView;