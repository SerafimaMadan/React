import React, {Component} from 'react';



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
         const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
         if (!result) {
             return null;
         }
         result.shift();
         return result ? `rgb(${result.map(i => parseInt(i, 16)).join(', ')})` : null;
     }

    checkColor(color) {
        return /^#?([\da-f]{6})$/i.test(color);
    }
//определяем, что ввести нужно 7 символов # и 6 символов цвета
    fixColor(color) {
        return color === '#' ? color.slice(0, 7) : `#${color.slice(0, 6)}`;
    }

    change(color) {
        if (this.checkColor(color)) {
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
                result: 'Warning!'
            })
        }
    }
    render() {


        return (
            <form className={this.state.isWarning ? 'warning' : ''}>
                <input
                    type="text"
                    className="hex-field js-hex-field"
                    placeholder="#333333"
                    value={this.state.color}
                    onChange={this.change.bind(this)}/>
                <div className="message js-message">{this.state.result}</div>
            </form>
        );
    }
}