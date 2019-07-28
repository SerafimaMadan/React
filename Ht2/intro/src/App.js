import React from 'react';


import "./App.css";
import ProjectList from "./components/ProjectList";
import Toolbar from "./components/Toolbar";

function App(props) {

  return (
    <div className="App">
        <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]}
                 selected="All"
                 onSelectFilter={(filter) => {console.log(filter);}}/>
               <ProjectList projects={props.projects}/>


    </div>
  );
}

export default App;
