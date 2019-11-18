import React, {useEffect, useState} from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import PostProvider from './components/PostProvider';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:7070/api/services')
            .then(response => setData(response.data));
    },);

    return (
        <PostProvider>
            <Router>
                <Link to="/services">
                    <button className="button">
                        Home
                    </button>
                </Link>
                <Link to="/new">
                    <button className="button">
                        Create new
                    </button>
                </Link>
                <Switch>
                    <Route exact path="/services" component={ServiceList}/>
                    <Route path="/new" component={ServiceAdd}/>
                    <Route path="/services/:id([0-9]+)" component={ServiceAdd}/>

                </Switch>
            </Router>

        </PostProvider>
    );
}

export default App;

