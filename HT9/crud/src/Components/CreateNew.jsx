import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Create() {
    const [postText, setPostText] = useState('');
    const postPage = '/posts';

    const handleChange = (e) => {
        const text = e.target.value;
        setPostText(text);
    };

    const handleClick = () => {
        const postUrl = 'http://localhost:7777' + postPage;
        const newNote = {id: 0, content: postText};

        fetch.post(postUrl, newNote);
    };

    return (
        <div className="cardCreate">
            <h1>Create post</h1>
            <textarea rows="10" cols="50" onChange={handleChange}/>
            <Link to="/posts" onClick={handleClick}>
                <button className="button">Publish</button>
            </Link>
        </div>
    );
}