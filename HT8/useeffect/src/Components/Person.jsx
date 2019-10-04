import React from 'react';

export default function Person(props) {

    return (
        <div
            onClick={() => props.handleInfo(props.id, props.name)}
            className={`list-name 
            ${props.isChoice ? 'chosen' : ''}`}>
            {props.name}
        </div>
    );
}