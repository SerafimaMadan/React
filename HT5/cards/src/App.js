import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ItemCardThree from "./Components/ItemCardThree";
import ItemCardTwo from "./Components/ItemCardTwo";

 function App() {
  return (
    <div className="App">

<ItemCardThree title = "Card title" link = "#"/>
<ItemCardTwo title = "Special title treatment" link = "#" img="..."/>

    </div>
  );
}

export default App;
