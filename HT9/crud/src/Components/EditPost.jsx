import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function EditPost({match}) {
     const [post, setPost] = useState('');
    const id = match.params.id;

    useEffect(() => {
        axios.get('http://localhost:7777/posts/'+id)
            .then(res => res.data.find(d => d.id === id))
            .then(p => setPost(p.content))
    }, [id]);


    return (
        <div className="card">
            {post}
            <button   onClick={() => {this.editPost(post)}}  className="button muted-button">Edit</button>
            <button onClick={() => this.deletePost(post.id)} className="button muted-button">Delete</button>
        </div>
    );
}