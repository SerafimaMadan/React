import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ItemCard from "./Components/ItemCard";


function App() {
    return (
        <div className="App">
            <ItemCard title="Card title" link="#">
                <img src="..." className="card-img-top" alt="Images cap"/>
            </ItemCard>
            <ItemCard title="Special title treatment" link="#"/>
        </div>
    );
}

export default App;
