import React from 'react';


export  default function Listing(props) {

   //пропишем условие для ограничения длинны предложения с помощью метода slice
    const itemList = props.items.map(item => {
        const title = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;
//пропишем условия для смена валюты при необходимости
        const getPrice = (price, code) => {
            if (code === 'USD') {
                return `$${price}`;
            }
            if (code === 'EUR') {
                return `€${price}`;
            }
            return `${price} ${code === 'GBP'}`;
        };
//прописываем условия для прописывания остатка товаров используя класс level-* ниже
        const amount = (item.quantity <= 10) ? 'low' : (item.quantity <= 20 ? 'medium' : 'high');

        return (
            <div className='item' key={item.listing_id}>
                <div className='item-image'>
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} alt="Item pic"/>
                    </a>
                </div>
                <div className='item-details'>
                    <p className='item-title'>{title}</p>
                    <p className='item-price'>{getPrice(item.price.toFixed(2), item.currency_code)}</p>
                    <p className={`item-quantity level-${amount}`}>{item.quantity} left</p>
                </div>
            </div>
        );
    });

    return <div className='item-list'>{itemList}</div>
}

Listing.defaultProps = {
    items: []
};