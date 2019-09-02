import React, {Component} from 'react';


export default class Cruds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            content: ''
        }
    }

    fetchNotes = () => {
        this.setState({...this.state, isFetching: true})
        fetch(process.env.REACT_APP_NOTES_URL)
            .then(response => response.json())
            .then(result => this.setState({
                content: result,
                isFetching: false
            }))
            .catch(e => console.log(e));
    };

    componentDidMount() {
        this.fetchNotes();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const content = this.state.content;
        const note = this.refs.note.value;
        const data = {note};
        content.push(data);
        this.setState({
            dates: content,
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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.dates !== prevProps.dates) {
            this.updateNotes(this.props.dates);
        }
    }

    updateNotes(dates) {
        this.content = dates;
    }

    componentWillUnmount() {
        window.noteRemove('fetchNotes', this.dates);
    }

    render() {
        const dates = this.state.dates;
        const title = 'NOTES!';
        return (
            <div>
                <div className="top">
                    <div className="for-refresh"><h2>{title}</h2>
                        <button className="btn btn-refresh" onClick={(e) => this.updateNotes(e)}>&#8635;</button>
                    </div>
                    {this.state.isFetching ? 'Fetching notes...' : ''}
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