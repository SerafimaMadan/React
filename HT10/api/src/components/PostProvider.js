import React, { useState, useEffect, } from 'react'
import PostsContext from '../context/ServiceContext';
import axios from "axios";

export default function PostProvider(props) {
    const [points, setPoints] = useState(['']);
    useEffect(() => {
        axios.get('http://localhost:7070/api/services')
            .then(response => setPoints(response.data));
    }, );
    return (
        <PostsContext.Provider value={points}>
            {props.children}
        </PostsContext.Provider>
    )
}