import React from 'react';


export default function TVprogram() {

    const List = props => (
        <div><h2 className="card-body">{props.title}</h2>
            <ul className={props.className} style={props.style}>{props.children}</ul>
        </div>
    );
    const ListItem = props => (
        <li className={props.className}><i>{props.icon}</i><a href={props.link}><p>{props.time}</p>{props.title}
        </a>{props.children}</li>
    );

    return (
        <div className="card">
            <List className='rows' title="TV program">Отвечает за блок ТВ программы
                <ListItem time="12.00" title="Really interesting1" link="#"/>
                <ListItem time="15.30" title="Really interesting2" link="#"/>
                <ListItem time="18.30" title="Really interesting3" link="#"/>
            </List>);
        </div>
    )
}