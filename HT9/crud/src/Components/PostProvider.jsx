import React, { useState, useEffect, } from 'react'
import PostsContext from '../context/PostsContext';
import axios from "axios";

export default function PostProvider(props) {
    const [posts, setPosts] = useState(['']);
    useEffect(() => {
        axios.get('http://localhost:7777/posts')
            .then(response => setPosts(response.data));
    },);
    return (
        <PostsContext.Provider value={posts}>
            {props.children}
        </PostsContext.Provider>
    )
}