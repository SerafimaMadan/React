import React, { Component } from 'react';

import './App.css';
import Table from './Components/Table';
import Forms from './Components/Forms';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            way: '',
            items: []
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        const items = [...this.state.items];
        items.push({
            date: this.state.date,
            way: this.state.way
        });
        this.setState({
            items,
            date: '',
            way: ''
        });
    };

    handleInputChange = (e) => {
        const input = e.target;
        const name = e.target.name;
        const value = input.value;

        this.setState({
            [name]: value
        })
    };
    onRemoveItems = (i) => {
        const items = this.state.items.filter((item, index) => {
            return index !== i;
        });

        this.setState({ items });
    };
        render() {
        return (
            <div className="App">

                <Forms handleFormSubmit={ this.handleFormSubmit }
                      handleInputChange={ this.handleInputChange }
                      newDate={ this.state.date }
                      newWay={ this.state.way }/>
                <Table items={ this.state.items } onRemoveItems={this.onRemoveItems}/>
            </div>
        );
    }
}

export default App;