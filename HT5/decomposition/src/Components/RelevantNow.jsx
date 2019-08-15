import React from 'react';


export default function RelevantNow(props)  {
const NewsTopRow = props =>(
    <div className="rows"><a href={props.link}>{props.title}{props.data}</a></div>
);
    return (
        <div className="first">Отвечает за верхнюю строчку с:  Сейчас в СМИ; Рекомендуем; дата/время
            <div className="first-row">
                <NewsTopRow title="Now in Social1" link="#"/>
                <NewsTopRow title="Now in Social2" link="#"/>
                <NewsTopRow data="15 августа, 18:25" link="#"/>
            </div>
        </div>
    )
}