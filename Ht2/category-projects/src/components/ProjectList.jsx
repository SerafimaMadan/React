import React from 'react';


const ProjectList = props => {

    const {projects} = props;
    return (

        <div className="portfolio">
            {projects.map((project, i) =>
                <div key={i}>
                    <img
                         src={project.imageType}
                        alt={project.category}
                    />
                </div>
            )
            }
        </div>
    );

};
export default ProjectList;