import React from 'react';


const CardsView = (props) => {
    const { items, cards } = props;

    const getLayoutClasses = items => {
        return Object.keys(items).map(key => `col-${key}-${items[key]}`).join(" ");
    };

    const layoutClasses = getLayoutClasses(items);
    const renderCards = (cards) => {
        return cards.map((card, i) => {
            return (
                <div className={layoutClasses} key={`card-${i}`}>
                    {card}
                </div>
            );
        });
    };

    return (
        <div className="row">
            {renderCards(cards)}
        </div>
    );
};
export default CardsView;