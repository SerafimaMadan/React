import React, {Component} from 'react';


export default class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {

            projects: [
                {
                    id: 0,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                    category: "Business Cards"
                }, {
                    id: 1,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                    category: "Websites"
                }, {
                    id: 2,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                    category: "Websites"
                }, {
                    id: 3,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                    category: "Websites"
                }, {
                    id: 4,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                    category: "Business Cards"
                }, {
                    id: 5,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                    category: "Websites"
                }, {
                    id: 6,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                    category: "Websites"
                }, {
                    id: 7,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                    category: "Business Cards"
                }, {
                    id: 8,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                    category: "Websites"
                }, {
                    id: 9,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                    category: "Flayers"
                }, {
                    id: 10,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                    category: "Websites"
                }, {
                    id: 11,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                    category: "Business Cards"
                }, {
                    id: 12,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                    category: "Websites"
                }, {
                    id: 13,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                    category: "Websites"
                }, {
                    id: 14,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                    category: "Business Cards"
                }, {
                    id: 15,
                    imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                    category: "Websites"
                }, {
                    id: 16,
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
