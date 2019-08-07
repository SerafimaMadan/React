import React from 'react';

export default function Typing({ from, message }) {
    return (
        <li >
            <div className="message-data">
                <span className="message-data-name">
                    <i className="fa fa-circle online">&#8226;</i>
                    {from.name}
                </span>
                <span className="message-data-time">
                    {message.time}
                </span>
            </div>
            <div>
            <i className="fa fa-circle online">&#8226;</i>
            <i className="fa fa-circle online" style={{color: '#AED2A6'}}>&#8226;</i>
            <i className="fa fa-circle online" style={{color: '#DAE9DA'}}>&#8226;</i>
            </div>
        </li>
    );
}