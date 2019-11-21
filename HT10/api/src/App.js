import React from 'react';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';


function App() {

    return (
        <Router>
            <ServiceAdd to='/services/:id'  />
            <Redirect exact="true" to='/services'/>
            <ServiceList />
        </Router>
    );
}

export default App;

