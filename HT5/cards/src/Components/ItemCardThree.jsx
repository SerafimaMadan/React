import React from 'react';
import ItemCard from "./ItemCard";


export default function ItemCardThree(props) {

    return (
        <div className="card three">
            <img src={props.img} className="card-img-top" alt="Images cap"/>
            <ItemCard title={props.title}/>
        </div>

    )
}

