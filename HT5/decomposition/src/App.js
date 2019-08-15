import React from 'react';

import './App.css';
import Header from './Components/Header';
import Menu from "./Components/Menu";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";
import Advertising from "./Components/Advertising";


function App() {
    return (
        <div className="App">
            <Header/>
            <Menu />
            <SearchBar image="..."/>
            <Advertising/>
            <Body/>
        </div>
    );
}

export default App;
