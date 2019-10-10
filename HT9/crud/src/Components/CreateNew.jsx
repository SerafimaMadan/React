import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function CreateNew() {
    const [postText, setPostText] = useState('');
    const postPage = '/posts';

    const handleChange = (e) => {
        const text = e.target.value;
        e.preventDefault();
        setPostText(text);

    };

    const handleClick = () => {
        const newNote = {id: 0, content: postText};
        axios.post('http://localhost:7777' + postPage, newNote);
    };

    return (
        <div className="cardCreate">
            <h1>
                Create post
            </h1>
            <textarea
                rows="10"
                cols="50"
                onChange={handleChange}/>
            <Link
                to="/posts"
                onClick={handleClick}>
                <button className="button">
                    Publish
                </button>
            </Link>
        </div>
    );
}