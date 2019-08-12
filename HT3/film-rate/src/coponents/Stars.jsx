import React from 'react';

import Starview from './Starview';



export default function Stars({count}) {
//задаём условие для атрибута
    if (count < 1 || count > 5) {
        return null;
    }
         const stars = (rating) => {
            let result = [];
            for (let i = 0; i < rating; i++) {
                //при соответствии условий добавим звезды в конец массива result
                result.push(<Starview key={i}/>);
            }
            return result;
        };

        return (<div className="card">
            <ul className="card-body-stars u-clearfix" >
                <li >{stars(count)}</li>
                </ul>

        </div>);

}
//определим значение атрибута по умолчанию
Stars.defaultProps = {count: 0};
