import React, {useContext} from 'react';
import PostContext from "../context/PostContext";

function findById(posts, id) {
    return posts.find(o => o.id === id);
}

function findByContent(posts, content) {
    return posts.find(o => o.content === content);
}

export default function EditPost({match}) {
    const posts = useContext(PostContext);

    const post = match.params.id ?
        findById(posts, Number(match.params.id)) :
        findByContent(posts, (match.params.content));

    const handleDeletePost = id => {
        let answer = window.confirm('Are you sure?')

        if (answer) {
            this.deletePost(id)
        }
    };
    return (
        <div className="card">
            {console.log(post)}
            {match.params.id}
            {post ? post.content : ''}
            <button onClick={() => this.editPost(post.content)} className="button muted-button">
                Edit
            </button>
            <button onClick={() => handleDeletePost(post.id)} className="button muted-button">
                Delete
            </button>
        </div>
    );
}