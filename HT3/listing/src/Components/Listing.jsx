import React from 'react';


export  default function Listing(props) {

   //пропишем условие для ограничения длинны предложения с помощью метода slice
    const itemList = props.items.map(item => {
        const title = item.title > 50 ? `${item.title.slice(0, 50)}...` : item.title;
//пропишем условия для смена валюты при необходимости
        const getPrice = (price, code) => {
            if (code === 'USD') {
                return `$${price}`;
            }
            if (code === 'EUR') {
                return `€${price}`;
            }
            return `GBP${price} `;
        };
//прописываем условия для прописывания остатка товаров используя класс level-* ниже
        const otherResult = (item.quantity <= 20)? 'medium' : 'high';
        const amount = (item.quantity <= 10) ? 'low' : otherResult;
       
        return (
            <div className='item' key={item.listing_id}>
                <div className='item-image'>
                    <a href={item.url}>
                        <img src={item.MainImage && item.MainImage.url_570xN} alt="Item pic"/>
                    </a>
                </div>
                <div className='item-details'>
                    <p className='item-title'>{title}</p>
                    <p className='item-price'>{getPrice(item.price, item.currency_code)}</p>
                    <p className={`item-quantity level-${amount}`}>{item.quantity} left</p>
                </div>
            </div>
        );
    });

    return <div className='item-list'>{itemList}</div>
}
//условие по умолчанию
Listing.defaultProps = {
    data: []
}; 