import React, {Component} from 'react';


export default class ProjectList extends Component {



    render() {
        const {projects} = this.props;
        return (
            <div className="portfolio">
                {projects.map((project) => {
                    return (
                        <div key={project.id}>
                            <img
                                src={project.imageType}
                                alt={project.category}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}
