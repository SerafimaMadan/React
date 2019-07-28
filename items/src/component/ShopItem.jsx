import React, { Component } from 'react';

import Products from "../module/Products";
import PropTypes from 'prop-types';

export default class ShopItem extends Component {

    static propTypes = {
        products: PropTypes.instanceOf(Products).isRequired,
    };

    render() {
        const {products} = this.props;

        return (
            <div className="shop-item">
                <div className="thumb">
                    <img src={products.img} alt="Item"/>
                </div>
                <div className="title">
                    {products.title}
                </div>
                <div className="property">
                    {products.color}
                </div>
                <div className="price">{products.price}</div>
                <button>Add to cart</button>
            </div>
        );
    };

}