import React, {useContext} from 'react';
import PostsContext from '../context/PostsContext';
import { Link } from 'react-router-dom';


import Card from "./Card";

export default function PostList() {
    const post = useContext(PostsContext);
    return (
        <React.Fragment>
            <h2>Posts</h2>
            <ul>
                {post.map((o, i) =>
                    <li key={i}>
                        <Link to={`/post/${o.id}`}>
                                <Card
                                    post={post}
                                />

                        </Link>
                    </li>)
                }
            </ul>
        </React.Fragment>
    )
}