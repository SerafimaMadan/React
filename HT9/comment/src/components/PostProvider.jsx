import React, {useState, useEffect,} from 'react'
import PostContext from '../context/PostContext';
import axios from "axios";

export default function PostProvider(props) {
    const [posts, setPosts] = useState([props]);
    useEffect(() => {
        axios.get('http://localhost:7777/posts')
            .then(response => setPosts(response.data));
    }, []);

    return (
        <PostContext.Provider value={posts}>
            {props.children}
        </PostContext.Provider>
    )
}