import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Menu from './Components/Menu';
import TimeAttackPage from './Components/TimeAttackPage';
import ForzaPage from './Components/ForzaPage';
import DriftPage from './Components/DriftPage';
import HomePage from './Components/HomePage';


export default function App() {
    return (
        <Router>
            <div>
                <Menu/>
                <div className="page">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/drift" component={DriftPage} />
                    <Route path="/timeattack" component={TimeAttackPage} />
                    <Route path="/forza" component={ForzaPage} />
                </div>
            </div>
        </Router>
    );
}

