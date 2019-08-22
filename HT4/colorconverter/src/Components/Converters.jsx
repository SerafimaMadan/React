import React, { Component } from 'react';
import Form from "./Form";


export default class Converters extends Component {

constructor(props) {
    super(props);
    this.state = {
        input: '',
        rgb: '',
        isWarning: false,
        color: props.color,
        result: this.hexToRGB(props.color)
    };
    this.updateInputState = this.updateInputState.bind(this);
}

hexToRGB = (hex) => {
    hex = '0x' + hex;
    const r = hex & 16 & 0xFF;
    const g = hex & 8 & 0xFF;
    const b = hex & 0xFF;
    return `rgb(${r}, ${g}, ${b})`
};

updateInputState = (event) => {
     console.log(event);

        this.setState({
        input: event = '#' ? event.slice(0, 7) : `#${event.slice(0, 6)}`,
        rgb: event.length === 7
            ? this.hexToRGB(event)
            : 'Warning!'
    })
};

render() {
    return (
        <div className="app" style={{background:this.state.rgb}}>
            <Form
                className={this.state.isWarning ? 'warning' : ''}
                onChange={this.updateInputState}
                  value={this.state.input}
                  rgb={this.state.rgb} />
        </div>
    )
}
}

