import React, {Component} from 'react';

export default class Cruds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            content: '',
            isFetching: false,
        };
        this.noteRef = React.createRef();
    }

    fetchNotes = () => {
        this.setState({isFetching: true});
        fetch(process.env.REACT_APP_NOTES_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(result => this.setState({
                notes: result,
                isFetching: false
            }))
            .catch(e => {
                console.log(e);
                this.setState({isFetching: false});
            });
    };

    createNote = (note) => {
        this.setState({isFetching: true});
        fetch(process.env.REACT_APP_NOTES_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                this.setState({content: '', isFetching: false})
                this.noteRef.current.focus();
                this.fetchNotes();
            })
            .catch(e => {
                console.log(e);
                this.setState({isFetching: false});
            });
    };

    removeNote = (id) => {
        this.setState({isFetching: true});
        fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                this.setState({isFetching: false})
                this.fetchNotes();
            })
            .catch(e => {
                console.log(e);
                this.setState({isFetching: false});
            });
    };

    componentDidMount() {
        this.fetchNotes();
        this.noteRef.current.focus();
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({content: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.createNote({content: this.state.content});
         };

    handleRemove = (id) => {
        this.removeNote(id);
    };

    handleUpdate = (e) => {
        this.fetchNotes();
    };

    render() {
        const title = 'NOTES!';
        const {notes, content, isFetching} = this.state;
        return (
            <div>
                <div className="top">
                    <div className="for-refresh"><h2>{title}</h2>
                        <button className="btn btn-refresh" onClick={this.handleUpdate}>&#8635;</button>
                    </div>
                    {isFetching ? 'Fetching notes...' : ''}
                    <ul className="list">
                        {notes.map(o =>
                            <li key={o.id}>{o.content}
                                <button onClick={() => this.handleRemove(o.id)}
                                        className="btn btn-remove">&#10006;</button>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="window">
                    <span>New note:</span>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <textarea name="note" ref={this.noteRef} value={content} onChange={this.handleChange}/>
                        </label>
                        <button className="btn btn-submit" type="submit">&#10148;</button>
                    </form>
                </div>

            </div>
        );
    }
}