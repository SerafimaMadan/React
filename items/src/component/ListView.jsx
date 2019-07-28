import React from 'react';

const ListView = props => {

    const items = props.items;


    const renderItems = (items) => {
        return items.map((item, i) => {
            return (
                <li className="list-item" key={ i.toString() }>
                    {item}

                  </li>
            );
        });
    };

    return (
        <ul className="list">
            {renderItems(items)}
        </ul>
    );
};
export default ListView;