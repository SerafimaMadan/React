import React from 'react';

import Item from 'Item';



export default function Listing({items}) {

    const list = items.map(item => {
        console.log(item);
        return <Item item={item}/>
    });
    return <div className="item-list">{list}</div>;
}