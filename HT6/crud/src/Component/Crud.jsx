import React, { Component } from 'react';

export default class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: []
        }
    }

    componentDidMount() {
        const dates = this.state.dates;
        this.setState({dates});
        // устанавливаем фокус на textarea при монтировании
        this.refs.note.focus();
        console.log(dates)
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
        fetch(process.env.REACT_APP_NOTES_URL)
            .then((response) => response.json())
            .then((res) => {
                this.setState({dates: dates});
                console.log(this.state);
            })
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
  //  componentDidUpdate(prevProps, prevState) {
  //      if (this.props.dates !== prevProps.dates) {
  //          this.updateNotes(this.props.dates);
  //      }
  //  }
//не доделано
 //   updateNotes() {
  //      this.note.update();
   // }
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