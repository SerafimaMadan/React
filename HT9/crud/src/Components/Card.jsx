import React from 'react';
import axios from "axios";

export default function Card({post}) {

    const handleRemove = (id) => {
       axios.delete(`http://localhost:7777/posts/id`)
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