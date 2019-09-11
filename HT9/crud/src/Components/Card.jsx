import React from 'react';
import axios from "axios";

export default function Card({post}) {
    const postPage = '/posts';


    const handleRemove = () => {
        const newNote = {id: 0};
        axios.post('http://localhost:7777' + postPage, newNote);
    };
    return (
        <div className="card">
            <div className="close">
            </div>

            <div className="author">
                Author: Serafima
            </div>
            <div>
               {post.created} ago
            </div>
            <h1>
                {post.content}
            </h1>
            <button onClick={handleRemove}
                    className="btn btn-remove">
                Delete
            </button>
        </div>
    );
}