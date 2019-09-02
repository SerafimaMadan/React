import React, {Component} from 'react';
import Form from "./Form";

export default class Converters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            rgb: '',
        };
    }
    hexToRGB = (hex) => {
        const r = Number.parseInt(hex.slice(1, 3), 16);
        const g = Number.parseInt(hex.slice(3, 5), 16);
        const b = Number.parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`
    };
    isValidHexColor = (hex) => {
        const validSymbols = '#[0-9a-fA-F]{6}';
        if (!hex.startsWith(validSymbols)) {
            return false;
        }
        return hex.slice(1).split('').some(o => !validSymbols.includes(o));
    };

    updateInputState = (event) => {
        console.log(event);
        this.setState({
            input: event,
            rgb: event.length === 7 ? this.hexToRGB(event) : '',
            error: event.length === 7 ? this.isValidHexColor(event) : false
        })
    };

    render() {
        return (
            <div className="app">
                <Form
                    className={this.state.isWarning ? 'warning' : ''}
                    onChange={this.updateInputState}
                    error={this.state.error}
                    rgb={this.state.rgb}/>
            </div>
        )
    }
}

