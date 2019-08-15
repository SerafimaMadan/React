import React from 'react';


export default function Menu()  {
    const MenuRow = props =>(
        <a href={props.link}>{props.title}</a>
    );
    return (
        <div className="menu" >
            <div className="first-row">
                <MenuRow title="Menu1" link="#"/>
                <MenuRow title="Menu2" link="#"/>
                <MenuRow title="Menu3" link="#"/>
                <MenuRow title="Menu4" link="#"/>
                <MenuRow title="Menu5" link="#"/>
                <MenuRow title="Menu6" link="#"/>
                <MenuRow title="Menu7" link="#"/>
                <MenuRow title="Menu8" link="#"/>
            </div>
        </div>
    )
}