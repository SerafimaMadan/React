import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ShopItem from "./ShopItem";

import Products from "../module/Products";
import ShopCard from "./ShopCard";


const products = new Products(
    [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        imageType: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }]
);


export default class Store extends Component {
    static propTypes = {
        products: PropTypes.instanceOf(Products).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            icon: '',
            onSwitch: '',
        };

        this.state = {
            cards: '',
            items: '',
        };


    }


    render() {

        return (
            <div>

                <ShopItem products={products}/>
                <ShopCard products={products}/>

            </div>
        );
    }
}

