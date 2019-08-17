import React from 'react';
import ListItem from "./ListItem";
import List from "./List";


export default function RelevantNow()  {

    return (
        <div className="first">Отвечает за верхнюю строчку с:  Сейчас в СМИ; Рекомендуем; дата/время
            <List className="first-row">
                <ListItem title="Now in Social1" link="#"/>
                <ListItem title="Now in Social2" link="#"/>
                <ListItem data="15 августа, 18:25" link="#"/>
            </List>
        </div>
    )
}