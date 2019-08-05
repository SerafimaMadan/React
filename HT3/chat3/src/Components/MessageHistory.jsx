import React from 'react';

import Message from 'Message';
import Typing from 'Typing';

export default function MessageHistory(props) {
    const messageList = props.list.map(message => {
        const MessageType = message.type === 'message' ? Message : (message.type === 'response' ? Response : Typing);
        return <MessageType from={message.from} message={message} />
    });

    return (
        <ul>{messageList}</ul>
    );
}
//условие по умолчанию
MessageHistory.defaultProps = {
    list: []
};