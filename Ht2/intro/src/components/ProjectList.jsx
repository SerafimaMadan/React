import React, { Component } from 'react';


export default class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                    category: "Business Cards"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                    category: "Business Cards"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                    category: "Business Cards"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                    category: "Flayers"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                    category: "Business Cards"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                    category: "Business Cards"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                    category: "Websites"
                }, {
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                    category: "Flayers"
                }
            ]
        };
    }

    render() {
        const {projects} = this.state;
        return (
            <div className="portfolio">
                {Object.keys(projects).map(category => {
                    return (
                        <div><img
                            key={projects[category].imageType}
                            id={projects[category].imageType}
                            src={projects[category].imageType}
                            alt={projects[category].imageType}
                        />
                        </div>
                    );
                })}
            </div>
        );
    }
}
