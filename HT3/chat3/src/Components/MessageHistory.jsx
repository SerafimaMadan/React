import React from 'react';

import Message from './Message';
import Typing from './Typing';
import Response from './Response';

export default function MessageHistory(props) {
    const messageList = props.list.map(message => {
        const resultForMessage = message.type === 'response' ? Response : Typing;
        const MessageType = message.type === 'message' ? Message : resultForMessage;
        return <MessageType key={message.id} from={message.from} message={message} />
    });

    return (
        <ul >{messageList}</ul>
    );
}
//условие по умолчанию
MessageHistory.defaultProps = {
    list: []
};