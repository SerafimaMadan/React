import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'view_list',
            products: [{
                name: "Nike Metcon 2",
                price: "130",
                color: "red",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
            }, {
                name: "Nike Metcon 2",
                price: "130",
                color: "green",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
            }, {
                name: "Nike Metcon 2",
                price: "130",
                color: "blue",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
            }, {
                name: "Nike Metcon 2",
                price: "130",
                color: "black",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
            }, {
                name: "Nike free run",
                price: "170",
                color: "black",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
            }, {
                name: "Nike Metcon 3",
                price: "150",
                color: "green",
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
            }]
        };
    }

    handleViewSwitch = view => {
        if (view === 'view_list') {
            this.setState({ view: 'view_module' });
            return;
        }
        if (view === 'view_module') {
            this.setState({ view: 'view_list' });
            return;
        }
    }

    render() {
        const {view, products} = this.state;
        return (
            <div>
                <IconSwitch icon={view} onSwitch={this.handleViewSwitch} />
                { view === 'view_list' && <ListView items={products} /> }
                { view === 'view_module' && <CardsView cards={products} /> }
            </div>
        );
    }
}

