import React, { Component } from 'react';




export default class Cruds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
    }
    componentDidMount() {
        const dates = this.state.dates;
        const data = {dates};
        fetch(process.env.REACT_APP_NOTES_URL, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

    }
    onSubmit = (e) => {
        e.preventDefault();
        const dates = this.state.dates;
        const note = this.refs.note.value;
        const data = {note};

        dates.push(data);
        this.setState({
            dates: dates,
        });

    };
    noteRemove = (i) => {
        const dates = this.state.dates;
        dates.splice(i, 1);
        this.setState({
            dates: dates
        });
        this.refs.myForm.reset();
        this.refs.note.focus();
    };
render() {
    const dates = this.state.dates;
    return (
        <div>
            <div className="top">
                <div className="for-refresh"><h2>NOTES</h2>
                    <button className="btn btn-refresh" >&#8635;</button>
                </div>
                <ul className="list">
                    {dates.map((data, i) =>
                        <li key={i} className="news">{i + 1}. {data.note}
                            <button onClick={() => this.noteRemove(i)} className="btn btn-remove">&#10006;</button>
                        </li>
                    )}
                </ul>
            </div>
            <div className="window">
                <span>New note:</span>
                <form ref="myForm" onSubmit={this.onSubmit}>
                    <label>
                        <textarea name="note" ref="note" onChange={this.handleChange}/>
                    </label>
                    <button className="btn btn-submit" onClick={(e) => this.onSubmit(e)}
                            type="submit">&#10148;</button>
                </form>
            </div>

        </div>
    );
}
}