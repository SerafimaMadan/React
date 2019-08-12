import React, {Component} from 'react';

class Forms extends Component {
    render() {
        return (
            <div id="Form">
                <h3>Учёт ваших тренировок:</h3>
                <form className="contact-form-flex" onSubmit={this.props.handleFormSubmit}>
                    <div className="contact-form_input">
                        <label htmlFor="date">
                            Date (DD.MM.YY):
                            <input id="date" value={this.props.newDate}
                                   type="text" name="date"
                                   onChange={this.props.handleInputChange}/>
                        </label></div>
                    <div className="contact-form_input">
                        <label htmlFor="way">
                            Way in km:
                            <input id="way" value={this.props.newWay}
                                   type="text" name="way"
                                   onChange={this.props.handleInputChange}/>
                        </label></div>
                    <div className="contact-form_input">
                        <input className="btn" type="submit" value="OK!"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms;