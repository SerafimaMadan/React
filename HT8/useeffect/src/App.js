import React, { useState} from 'react';
import './App.css';
import List from "./Components/List";


function App() {

    const [info, setInfo] = useState({ id: null });


    return (
    <div className="App">
<List/>

    </div>
  );
}

export default App;
