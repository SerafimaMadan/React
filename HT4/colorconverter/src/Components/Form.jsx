import React from 'react';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.updateInput = this.updateInput.bind(this)
    }

    updateInput = (event) => {
        this.props.onChange(event.target.value)
    };

    render() {
        return (

                <form >
                    <input
                        className="hex-field js-hex-field"
                        type="text"
                        placeholder="#000000"
                        onChange={this.updateInput}
                        value={this.props.value}>
                    </input>
                <p className="message js-message">{this.props.rgb}</p>
                </form>
        )
    }
}
