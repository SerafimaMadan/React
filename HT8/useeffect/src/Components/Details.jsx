import React, {useEffect, useState} from 'react';


export default function Details(info) {
    const [items, setItems] = useState(null);
    useEffect(() => {
        if (!info.id) return;
        const currentItems = items;

        if (currentItems) {
            return setItems(currentItems);
        } else {
            fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json, ")
                .then(response => response.json())
                .then(items => {
                        setItems(items)
                    }
                )
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [info.id, items]);
    console.log('return');
    if (!items) return null;


};

return (
    <div className="list-names">
        <img
            className="list-name-image"
            src={items.avatar + Math.random().toString().slice(2, 3)}
            alt="avatar"
        />
        <div>city: {items.details.city} </div>
        <div>company: {items.details.company} </div>
        <div>position: {items.details.position} </div>
    </div>
);
