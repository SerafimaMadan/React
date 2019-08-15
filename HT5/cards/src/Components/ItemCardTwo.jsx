import React from 'react';
import ItemCard from "./ItemCard";


export default function ItemCardTwo (props) {
    console.log(props);
        return (
            <div className="card second" >
                <ItemCard title={props.title}/>
                </div>

        )
    }
