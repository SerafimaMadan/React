import React from 'react';

import List from './List';
import ListItem from './ListItem'

export default function TVprogram() {

    return (
        <div className="card">
            <List className='rows' title="TV program">Отвечает за блок ТВ программы
                <ListItem time="12.00" title="Really interesting1" link="#"/>
                <ListItem time="15.30" title="Really interesting2" link="#"/>
                <ListItem time="18.30" title="Really interesting3" link="#"/>
            </List>
        </div>
    )
}