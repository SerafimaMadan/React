import React, {Component} from 'react';

import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFilter: "All",
            filterProjects: props.projects
        };
    }

    onSelectFilter = (filter) => {
        const {projects} = this.props;
        const filterProjects = projects.filter(({category}) => category === filter);
        this.setState({
            selectedFilter: filter, 
            filterProjects
        })
    };

    render() {
        const {filters} = this.props;
        const {selectedFilter, filterProjects} = this.state;

        return (
            <div>
                <Toolbar
                    filters={filters}
                    selected={selectedFilter}
                    onSelectFilter={this.onSelectFilter}
                />
                <ProjectList projects={filterProjects}/>
            </div>
        );
    }
}
