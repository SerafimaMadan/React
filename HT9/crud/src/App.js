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
    },);

    return (
        <Router>
            <div className="App">
                <Link to="/">
                    <button className="button">
                        Home
                    </button>
                </Link>
                <Link to="/posts/new">
                    <button className="button">
                        Create post
                    </button>
                </Link>

                <Switch>
                    <Route
                        path="/posts/new"
                        component={CreateNew}/>

                    <Route
                        path="/"
                        component={() => data.map((post, i) =>
                            <Card
                                post={post}
                                key={i}
                            />)
                        }
                    />
                    <Route
                        path="/posts/:id([0-9]+)?"
                        component={EditPost}/>

                </Switch>

            </div>
        </Router>
    );
}

export default App;