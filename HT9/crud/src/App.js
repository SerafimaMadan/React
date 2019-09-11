import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import axios from 'axios';
import Card from './Components/Card';
import CreateNew from './Components/CreateNew';
import EditPost from './Components/EditPost';


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7777/posts')
            .then(response => setData(response.data));
    });

    return (
        <div className="App">
            <Router>
                <Link to="/posts">
                    <button className="button">
                        Home
                    </button>
                </Link>
                <Link to="/posts/new">
                    <button className="button">
                        Create post
                    </button>
                </Link>
                <Link to="/posts/:id">
                    <button className="button">
                        Edit post
                    </button>
                </Link>
                <Switch>
                    <Route
                        path="/posts/new"
                        exact
                        component={CreateNew}/>
                    <Route
                        path="/posts/:id"
                        exact
                        component={EditPost}/>
                    <Route
                        path="/posts"
                        exact
                        component={() => data.map((post, i) =>
                            <Card
                                post={post}
                                key={i}/>)}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;