import React from 'react';
import Portfolio from './components/Portfolio';


function App(props) {

  return (
    <div className="App">
        <Portfolio projects={props.projects} />
    </div>
  );
}

export default App;
