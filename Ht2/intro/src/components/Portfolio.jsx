import React, {Component} from 'react';

import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this.state;
        return (
            <div>

                <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]}
                         selected="All"
                         onSelectFilter={(filter) => {
                             console.log(filter);
                         }}/>
                <ProjectList projects={props.projects}/>

            </div>
        );

    }
}
