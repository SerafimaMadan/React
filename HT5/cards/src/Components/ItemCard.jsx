import React from 'react';


export default function ItemCard(props)  {

        return (
            <div className="card" >{props.children}
                   <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    <a href={props.link} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }



