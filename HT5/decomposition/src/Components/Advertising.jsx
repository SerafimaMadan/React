import React from 'react';


export default function Advertising()  {

    const Pic = props => (
        <div><a href={props.link}>{props.image}</a></div>
    );
    const Row = props => (
        <a href={props.link}>{props.title}</a>
    );
    return (
        <div className="advert">Отвечает за блок с рекламой после поисковой строки
            <Pic link="#"/>
            <Row title="Film" link="#"/>
        </div>
    )
}