import React from 'react';
import Weather from "./Weather";
import PopularSearching from "./PopularSearching";
import Maps from "./Maps";
import TVprogram from "./TVprogram";
import Broadcast from "./Broadcast";

export default function Body() {

    return (
        <div className="body"> Отвечает за 5 блоков за рекламой
            <div className="block1">
                <Weather/>
                <PopularSearching/>
            </div>
            <div className="block2">
                <Maps/>
                <TVprogram/>
            </div>
            <div className="block3">
                <Broadcast/>
            </div>
        </div>

    )
}