import React, {Component} from 'react';


import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: "All",
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
            ],

        };
    }

    render() {
        const {projects, filter} = this.state;
        return (
            <div>

                <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]}
                         selected={filter}
                         onSelectFilter={(filter) => {console.log(filter);}}/>
                <ProjectList projects={projects}/>

            </div>
        );

    }
}
