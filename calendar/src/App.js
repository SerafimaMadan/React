import React from 'react';
import './App.css';
import Calendar from './components/Calendar';

function App() {
    const now = new Date();

    return (
        <div className="App">
            <Calendar date={now}/>
        </div>
    );
}

export default App;
