import React, { Component } from 'react';
import Products from "../module/Products";
import PropTypes from 'prop-types';

export default class ShopCard extends Component {

    static propTypes = {
        products: PropTypes.instanceOf(Products).isRequired,
    };

    render() {
        const {products} = this.props;

        return (
            <div className="shop-card">
                <div className="title">
                    {products.name}
                </div>
                <div className="property">
                    {products.color}
                </div>
                <div className="slider">
                    <img src={products.imageType} alt="Item"/>
                </div>

                <div className="for-buy">
                    <div className="price">{products.price}</div>
                    <button >Add to cart</button>
                </div>
            </div>
        );
    };
}