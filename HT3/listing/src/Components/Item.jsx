import React from 'react';


export default function Item({item}) {
    //реализуем необходимые свойства для выведения на экран:
    // listing_id — уникальный идентификатор предложения (key), число;
    // url — ссылка на предложение, строка;
    // MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
    // title — название предложения, строка;
    // currency_code — код валюты, строка;
    // price — цена, строка;
    // quantity — доступное количество, число.
    return (
        <div className="item" key="{item.listing_id}">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{item.price.toFixed(2)}</p>
                <p className="item-quantity level-medium">{item.quantity}</p>
            </div>
        </div>
    );
}