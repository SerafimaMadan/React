import React from 'react';


export default function Broadcast()  {
    const BodyRow = props => (
        <div className="first-row"><i>{props.icon}</i><a href={props.link}><p>{props.time}</p>{props.title}</a></div>
    );

    const BodyColumn = props => (
        <div className="rows"> Отвечает за блок с список в эфире
            <h2 className="card-body">{props.title}</h2>
            <div >
                <BodyRow time="12.00" title="Really interesting1" link="#"/>
                <BodyRow time="15.30" title="Really interesting2" link="#"/>
                <BodyRow time="18.30" title="Really interesting3" link="#"/>
            </div>
        </div>
    );
    return (
        <div className="card">
            <BodyColumn title="TV program"/>
        </div>
    )
}