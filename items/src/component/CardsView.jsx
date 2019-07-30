import React from 'react';


const CardsView = (props) => {
    const { cards } = props;

    return (
        <div>
            {cards.map(o => <div>
                <img src={o.img} alt={o.name} />
            </div>)}
        </div>
    )
};
export default CardsView;