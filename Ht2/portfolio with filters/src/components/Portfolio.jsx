import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from "./ProjectList";

//create 3 properties
const [ filters, selected, onSelectFilter ] = props;

export default class Portfolio extends Component()  {

        constructor(props) {
        super(props);
        this.state=({projects:[], selected: []});
    }


    render() {
        return (

               <div className="portfolio">
                   <Toolbar
                       filters={["All", "Websites", "Flayers", "Business Cards"]}
                       selected={'All'}
                       onSelectFilter={(filter) => console.log(filter)} />
<ProjectList/>
               </div>

        );
    }
}

