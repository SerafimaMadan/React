import React from 'react';


export default function GrammarHelper(props) {

    return (
        <div className="card">Отвечает за блок справа
            <a href={props.link}> <img src={props.img} className="card-img-top" alt="Images cap"/>
                <div> {props.title}</div>
            </a>
        </div>

    )
}