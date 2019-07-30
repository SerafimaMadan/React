import React, { Component } from 'react';

export default class ShopCard extends Component {


    render() {
        const { products } = this.props;

        return (
            <div className="shop-card">
                <div className="title">
                    {products.name}
                </div>
                <div className="property">
                    {products.color}
                </div>
                <div className="slider">
                    <img src={products.img} alt="Item"/>
                </div>

                <div className="for-buy">
                    <div className="price">{products.price}</div>
                    <button >Add to cart</button>
                </div>
            </div>
        );
    };
}