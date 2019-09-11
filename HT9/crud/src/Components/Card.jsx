import React from 'react';

export default function Card({post}) {
    return (
        <div className="card">
            <div className="close">
            </div>
            <img className="avatar" src="./DSC_0637.JPG" alt="avatar"/>
            <div className="author">
                Author: Serafima
            </div>
            <div>
                Created: {post.created} ago
            </div>
            <h1>
                {post.content}
            </h1>
        </div>
    );
}