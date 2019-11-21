import React from 'react';


//компонент без состояния только для отражения формы для каждого li сообщения
export default function Response({ from, message }) {
    return (
        <li className="clearfix" >
            <div className="message-data align-right">
                <span className="message-data-time" >
                    {message.time}
                </span>
                <span className="message-data-name" >
                    {from.name}
                </span>
                <i className="fa fa-circle me">&#8226;</i>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </li>
    );
}