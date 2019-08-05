import React from 'react';

import Starview from './Starview';



export default function Stars({count}) {
//задаём условие для атрибута
    if (count > 0 && count <= 5) {
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
    } else {
        //если другое, т.е. 0 или что-то кроме цифры, нет реализации
        return null;
    }
}
//определим значение атрибута по умолчанию
Stars.defaultProps = {count: 0};
