import React from 'react';


export default function CurrencyQuotes(props) {
//компонент похож по структуре с RelevantNow, но не уверена в возможности использования здесь
    const CurrencyColumn = props =>(
        <div className="rows"><a href={props.link}>{props.title}</a></div>
    );
    return (
        <div className="card"> Отвечает за строку "курсы валют"
            <div className="first-row">
                <CurrencyColumn title="USD" link="#"/>
                <CurrencyColumn title="EUO" link="#"/>
                <CurrencyColumn title="Oil" link="#"/>
                <CurrencyColumn title="..." link="#"/>
            </div>
        </div>
    )
}