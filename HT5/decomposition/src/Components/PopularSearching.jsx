import React from 'react';
import ListItem from "./ListItem";
import List from "./List";

export default function PopularSearching()  {

     return (
        <div className="card">
            <List className="rows" title="Popular now"> Отвечает за блок посещаемого
                <ListItem time="12.00" title="Really interesting1" link="#"/>
                <ListItem time="15.30" title="Really interesting2" link="#"/>
                <ListItem time="18.30" title="Really interesting3" link="#"/>

            </List>
        </div>
    )
}