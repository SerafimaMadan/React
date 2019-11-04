import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function EditPost({match}) {

    const [post, setPost] = useState([]);
    const id = match.params.id;

    useEffect(() => {
        axios.get('http://localhost:7777/posts/' + id)
            .then(response => response.data.find(d => d.id === id))
            .then(data => setPost(data.content))
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);
    console.log(post);
    return (
        <div className="card">
            {post}
            <button onClick={() => {this.editPost(post)}} className="button muted-button">
                Edit
            </button>
            <button onClick={() => this.deletePost(post.id)} className="button muted-button">
                Delete
            </button>
        </div>
    );
}