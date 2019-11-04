import React, {useContext} from 'react';
import PostContext from '../context/PostContext';
import {Link} from 'react-router-dom';


import Card from "./Card";

export default function PostList() {
    const posts = useContext(PostContext);
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post, index) =>
                    <li key={index}>
                        <Link to={`/posts/${post.id}`}>
                            <Card post={post}/>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}