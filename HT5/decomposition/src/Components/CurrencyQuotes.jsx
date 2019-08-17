import React from 'react';
import List from "./List";
import ListItem from "./ListItem";


export default function CurrencyQuotes() {

    return (
        <div className="card"> Отвечает за строку "курсы валют"
            <List className="first-row">
                <ListItem title="USD" link="#"/>
                <ListItem title="EUO" link="#"/>
                <ListItem title="Oil" link="#"/>
                <ListItem title="..." link="#"/>
            </List>
        </div>
    )
}