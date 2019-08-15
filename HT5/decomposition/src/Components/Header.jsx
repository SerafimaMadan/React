import React from 'react';

import RelevantNow from './RelevantNow';
import News from "./News";
import GrammarHelper from './GrammarHelper';
import CurrencyQuotes from "./CurrencyQuotes";

export default function Header() {

    return (
        <div className="header">
            <div>
                <RelevantNow/>
                <News/>
                <CurrencyQuotes/>
            </div>
            <div className="float-right">
                <GrammarHelper title="Работа над ошибками" link="#"/>
            </div>
        </div>

    )
}