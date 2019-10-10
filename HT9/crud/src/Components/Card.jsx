import React from 'react';
import moment from 'moment';

export default function Card({post}) {

    return (
        <div className="card">
            <div className="close">
            </div>
            <div className="author">
                Author: Serafima
            </div>
            <div>
               Post created {moment(post.created).startOf('hours').fromNow()}

            </div>
            <h1>
                {post.content}
            </h1>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
        </div>
    );
}