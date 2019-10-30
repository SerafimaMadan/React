import React, { useState } from 'react'
import PostsContext from '../context/PostsContext';

export default function PostProvider(props) {
    const [posts, setPosts] = useState(['']);

    return (
        <PostsContext.Provider value={posts}>
            {props.children}
        </PostsContext.Provider>
    )
}