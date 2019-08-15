import React from 'react';


export default function SearchBar(props) {

    return (
        <div className="search-bar">Отвечает за логотип и строку поиска
            <div>{props.image}</div>
            <div>
                <form>
                    <input value={props.value}
                           type="text"
                           className="hex-field js-hex-field"/>
                    <button type="submit">Найти</button>
                </form>
            </div>
        </div>
    )
}