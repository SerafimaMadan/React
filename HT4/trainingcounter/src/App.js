import React, {Component} from 'react';

import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                date: '',
                way: '',
            },
            items: [],
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.setState(prevState => {
            const input = {date: '', way: ''};
            const {date, way} = prevState.input;
            const {items} = prevState;
            //условие для сопоставления записей с одинаковыми датами
            const present = items.find(o => o.date === date);
            if (present === undefined) {
                return {
                    items: [...prevState.items, {date, way: Number(way)}],
                    input,
                }
            }
            else 
            return {
                items: items.map(o => o === present ? { date, way: present.way + Number(way) } : 0),
            }
        });
    };

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState(prevState => ({
            input: {
                ...prevState.input,
                [name]: value,
            }
        }));
    };
    onRemoveItem = (date) => {
        this.setState(prevState => {
            const {items} = prevState;
            return {
                items: items.filter(o => o.date !== date)
            }
        })
    };


    render() {
        return (
            <div className="App">
                <Form handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      newDate={this.state.date}
                      newWay={this.state.way}/>
                <Table items={[...this.state.items].sort((o1, o2) => (new Date(o1.date) + new Date(o2.date)))}
                       onRemoveItem={this.onRemoveItem}/>
            </div>
        );
    }
}

export default App;