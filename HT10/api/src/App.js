import React from 'react';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import Page404 from "./components/Page404";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';


function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/services"/>
                </Route>
                <Route path="/services/:id" component={ServiceAdd}/>
                <Route path="/services" exact component={ServiceList}/>
                <Route path="*" component={Page404}/>
            </Switch>
        </Router>
    );
}

export default App;

