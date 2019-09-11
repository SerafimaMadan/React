import React, { useState} from 'react';
import './App.css';
import List from "./Components/List";
import Details from "./Components/Details";


function App() {

    const [info] = useState({ id: null });


    return (
    <div className="App">
<List/>
        {info.id ? <Details info={info} /> : null}
    </div>
  );
}

export default App;
