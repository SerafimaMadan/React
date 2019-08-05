import React from 'react';


const CardsView = (props) => {
    const {cards} = props;

    return (
        <div className="module-view">
            ({cards.map((o, i) => <div key={i}>
            <div className="shop-card">
                <div className="title">
                    {o.name}
                </div>
                <div className="property">
                    {o.color}
                </div>
                <div className="slider">
                    <img src={o.img} alt={o.name}/>
                </div>

                <div className="for-buy">
                    <div className="price">{o.price}</div>
                    <button>Add to cart</button>
                </div>
            </div>

        </div>)})
        </div>
    );
};
export default CardsView;