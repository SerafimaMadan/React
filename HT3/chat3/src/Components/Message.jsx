import React from 'react';

//создаю компонент без состояния только для отражения формы для каждого li сообщения
export default function Message({from, message}) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name">
                    <i className="fa fa-circle online"> </i> {from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">
                {message.text}
            </div>
        </li>
    );
}