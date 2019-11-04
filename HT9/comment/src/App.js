import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import axios from 'axios';
import CreateNewPost from './components/CreateNewPost';
import EditPost from './components/EditPost';
import PostList from "./components/PostList";
import PostProvider from "./components/PostProvider";


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7777/posts')
            .then(response => setData(response.data));
    }, []);

    return (
        <PostProvider>
            <Router>
                <div className="App">
                    <Link to="/posts">
                        <button className="button">
                            Home
                        </button>
                    </Link>
                    <Link to="/new">
                        <button className="button">
                            Create post
                        </button>
                    </Link>
                    <Switch>
                        <Route
                            path="/new"
                            component={CreateNewPost}/>
                        <Route
                            path="/posts"
                            exact={true}
                            component={PostList}
                        />
                        <Route value={data}
                               path="/posts/:id([0-9]+)"
                               component={EditPost}/>
                    </Switch>

                </div>
            </Router>
        </PostProvider>
    );
}

export default App;