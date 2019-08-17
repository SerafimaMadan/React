import React from 'react';
import List from "./List";
import ListItem from "./ListItem";

export default function Menu()  {

    return (
        <div className="menu" >
            <List className="first-row">
                <ListItem title="Menu1" link="#"/>
                <ListItem title="Menu2" link="#"/>
                <ListItem title="Menu3" link="#"/>
                <ListItem title="Menu4" link="#"/>
                <ListItem title="Menu5" link="#"/>
                <ListItem title="Menu6" link="#"/>
                <ListItem title="Menu7" link="#"/>
                <ListItem title="Menu8" link="#"/>
            </List>
        </div>
    )
}