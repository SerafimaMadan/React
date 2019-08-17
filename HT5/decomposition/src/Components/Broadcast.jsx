import React from 'react';
import List from "./List";
import ListItem from "./ListItem";


export default function Broadcast()  {

    return (
        <div className="card">
           Отвечает за блок с список в эфире
                <List className="rows" title="Эфир">
                    <ListItem time="12.00" title="Really interesting1" link="#"/>
                    <ListItem time="15.30" title="Really interesting2" link="#"/>
                    <ListItem time="18.30" title="Really interesting3" link="#"/>
                </List>

        </div>
    )
}