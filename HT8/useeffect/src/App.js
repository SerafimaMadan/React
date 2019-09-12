import React, { useState} from 'react';
import './App.css';
import List from "./Components/List";
import Details from "./Components/Details";


function App() {

    const [info, setInfo] = useState({ id: null });

    function handleInfo(id, name) {
        setInfo({ id, name });
    }

    return (
    <div className="App">
<List handleInfo={handleInfo}/>
        {info.id ? <Details info={info}/> : null}
    </div>
  );
}

export default App;
