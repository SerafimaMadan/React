import React, {Component} from 'react';


import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";


export default class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFilter: "All",
            filters: ["All", "Websites", "Flayers", "Business Cards"],
            projects: "filteredProjects"
        };
    }

    onSelectFilter(filter) {
        let filteredProjects = this.state.selectedFilter.filter((item) => {
            if (item.category === filter.category) {
                return true;
            }
           else { return false}
        });
        this.setState({
            projects: filteredProjects
        });
    };

    render() {


        const {projects} = this.props;
        const {selectedFilter, filters} = this.state;

        return (
            <div>

                <Toolbar
                    filters={filters}
                         selected={selectedFilter}
                    onSelectFilter={(filter) => {
                         console.log(filter);
                         }}
                />
               <ProjectList projects={projects}/>}

            </div>
        );

    }
}
