import React from 'react';

import './App.css';
import Hook from "./Components/Hook";


export default function App() {
    return (<div>
        <Hook url={process.env.REACT_APP_DATA_URL}/>
        <Hook url={process.env.REACT_APP_ERROR_URL}/>
        <Hook url={process.env.REACT_APP_LOADING_URL}/>

    </div>)
}