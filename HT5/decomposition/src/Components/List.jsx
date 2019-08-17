import React from 'react';

export default function List(props) {

    return (
    <div><h2 className="card-body">{props.title}</h2>
        <ul className={props.className} style={props.style}>{props.children}</ul>
    </div>
);
}