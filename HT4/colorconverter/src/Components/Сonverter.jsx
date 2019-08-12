import React, {Component} from 'react';

import Input from './Input';

export default class Converter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isWarning: false,
            color: props.color,
            result: this.hexTorgb(props.color)
        };
    }


     hexTorgb(c) {
   let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    colors(color) {
        return /^#?([\da-f]{6})$/i.test(color);
    }

    fixColor(color) {
        return color[0] === '#' ? color.slice(0, 7) : `#${color.slice(0, 6)}`;
    }

    change(color) {
        if (this.colors(color)) {
            color = this.fixColor(color);
            this.setState({
                color,
                isWarning: false,
                result: this.hexTorgb(color)
            });
        } else {
            this.setState({
                isWarning: true,
                color: this.fixColor(color),
                result: 'Error!'
            })
        }
    }

    render() {
        const props = {};
        if (this.state.isWarning) {
            props.className = 'warning';
        } else {
            props.style = {
                backgroundColor: this.state.color
            };
        }

        return (
            <figure {...props}>
                <Input
                    value={this.state.colors}
                    onChange={this.change.bind(this)}/>
                <div className="message js-message">{this.state.result}</div>
            </figure>
        );
    }
}