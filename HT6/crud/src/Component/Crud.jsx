import React from 'react';

import axios from 'axios';

export default class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'NOTES',
            index: '',
            dates: []
        }
    }

    componentDidMount() {
        this.refs.note.focus();
    }

    noteSubmit = (e) => {
        e.preventDefault();

        const dates = this.state.dates;
        const note = this.refs.note.value;
        const data = { note };
        dates.push(data);

        this.setState({
            dates: dates,
        });

        this.refs.myForm.reset();
        this.refs.note.focus();
        console.log(dates);

        axios.post(`REACT_APP_NOTES_URL=http://localhost:3000/notes`, {dates})
            .then(response => response.json)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({dates: res.data});
            })


    };


    noteRemove = (i) =>{
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
            <div >
                <div className="top">
                    <span>{this.state.title}</span>
                    <ul className="list">
                        {dates.map((data, i) =>
                            <li key={i} className="news">{i + 1}. {data.note}
                                <button  onClick={() => this.noteRemove(i)} className="btn-remove" >&#10006;</button>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="window">
                    <span>New note:</span>
                    <form ref="myForm" onSubmit={this.handleSubmit}>
                        <label>
                            <textarea name="note" ref="note" onChange={this.handleChange}/>
                        </label>
                        <button onClick={(e) => this.noteSubmit(e)} type="submit">&#10148;</button>
                    </form>
                </div>

            </div>
        );
    }
}