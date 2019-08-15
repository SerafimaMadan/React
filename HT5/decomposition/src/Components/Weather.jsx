import React from 'react';


export default function Weather()  {

    const Row = props => (
        <div><a href={props.link}>{props.title}</a></div>
    );
    const BodyColumn = props => (
        <div className="rows"> Отвечает за блок с погодой
            <h2 className="card-body">{props.title}</h2>
        </div>
    );
    return (
        <div className="card">
            <BodyColumn title="Weather"/>
            <Row title="+17" link="#"/>
        </div>
    )
}