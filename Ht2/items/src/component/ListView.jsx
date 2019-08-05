import React from 'react';


const ListView = props => {
    const items = props.items;


    return (

        <ul className="list" >
            {items.map((o, i) => <li key={i}>
                <div className="shop-item" >
                    <img className="thumb" src={o.img} alt={o.name}/>
                    <div className="title">
                        {o.name}
                    </div>
                    <div className="property">
                        {o.color}
                    </div>
                    <div className="price">{o.price}</div>
                    <button>Add to cart</button> </div>
            </li>)}
        </ul>

    );
};
export default ListView;