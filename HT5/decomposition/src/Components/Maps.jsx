import React from 'react';


export default function Maps() {

    const Row = props => (
        <a href={props.link}>{props.title}</a>
    );
    const BodyColumn = props => (
          <h2 className="card-body">{props.title}</h2>

    );
    return (
        <div className="card"> Отвечает за блок с картами
            <BodyColumn title="Map country"/>
            <Row title="Schedule" link="#"/>
        </div>
    )
}