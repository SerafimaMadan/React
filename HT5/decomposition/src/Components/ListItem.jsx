import React from 'react';

export default function ListItem(props) {

    return (
        <li className={props.className}><i>{props.icon}</i><a href={props.link}><p>{props.time}</p>{props.title}{props.data}
        </a>{props.children}</li>
    );
}