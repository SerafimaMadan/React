import React from 'react';

import './App.css';
import Header from './Components/Header';
import Menu from "./Components/Menu";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";


function App() {
    return (
        <div className="App">
            <Header/>
            <Menu />
            <SearchBar image="..."/>
            <Body/>
        </div>
    );
}

export default App;
