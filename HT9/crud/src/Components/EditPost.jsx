import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditPost({match}) {
    const postPage = '/:id';
    const [post, setPost] = useState('');

    const id = match.params.id;
    useEffect(() => {
        axios.get('http://localhost:7777/posts' + postPage)
            .then(response => response.json())
            .then(res => res.data.find(d => d.id === id))
            .then(p => setPost(p.id))

    }, [id]);

    return (
        <div className="card">
            {post}
        </div>
    );
}