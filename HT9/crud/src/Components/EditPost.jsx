import React, { useState, useEffect } from 'react';

export default function EditPost({match}) {
    const postsUrl = 'http://localhost:7777/posts';
    const [post, setPost] = useState('');
    const id = match.params.id;
    useEffect(() => {
        fetch.get(postsUrl)
            .then(res => res.data.find(d => d.id === id))
            .then(p => setPost(p.content))
    }, [id]);

    return (
        <div className="card">
            {post}
        </div>
    );
}