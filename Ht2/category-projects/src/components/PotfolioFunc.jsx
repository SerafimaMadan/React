import React, { useState } from 'react';

import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default function Portfolio(props) {

  

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
