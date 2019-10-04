import React, {Component} from 'react';

import './App.css';
import Clock from "./Component/Clock";
import timezone from './Component/timezone.json'
import Clocks from "./Component/Clocks";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clocks: [],
            writeClock: ''
        };
        this.addTimeZone = this.addTimeZone.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

//изменение значения в input/select
    handleChange(e) {
        this.setState({writeClock: e.target.value});
    }

//добавление временной зоны
    addTimeZone() {
        if (this.state.clocks.findIndex(choose => choose.Timezone === this.state.writeClock) < 0) {
            const zone = timezone.find(k => k.Timezone === this.state.writeClock);
            this.setState(prevState => ({
                clocks: [...prevState.clocks, zone]
            }));
        }
    }
//удаление добавленного блока
    removeClick(zone) {
        const updateClocks = this.state.clocks;
        const index = updateClocks.findIndex(take => take.Timezone === zone);
        updateClocks.splice(index, 1);
        this.setState({
            clocks: updateClocks
        });
    }


    render() {
        const optionItems = timezone.map((zone) =>
            <option
                value={zone.Timezone}
                key={zone.Timezone}
                onChange={this.handleChange}>
                {zone.Country}
            </option>
        );

        const clocks = this.state.clocks.map((zone) =>
            <Clock {...zone} key={zone.Timezone} removeClick={() => this.removeClick(zone.Timezone)}/>
        );

        return (
            <div className="w3-container">
                <Clocks />
                <div>
                    <p>
                        <select
                            value={this.state.writeClock}
                            onChange={this.handleChange}>
                            {optionItems}
                        </select>
                    </p>
                    <p>
                        <button onClick={this.addTimeZone} className="w3-btn w3-blue">Добавить</button>
                    </p>
                </div>

                {clocks}
            </div>

        );
    }
}

