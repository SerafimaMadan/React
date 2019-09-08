import React, {Component} from 'react';

export default class Form extends Component {

    updateInput = (event) => {
        this.props.onChange(event.target.value)
    };

    render() {
        return (

            <form style={{background: this.props.rgb}}>
                <input
                    className="hex-field js-hex-field"
                    type="text"
                    placeholder="#000000"
                    onChange={this.updateInput}
                    value={this.props.value}/>
                <p className="message js-message">
                    {this.props.error ? this.props.rgb : 'Ошибка'}
                </p>
            </form>
        )
    }
}
