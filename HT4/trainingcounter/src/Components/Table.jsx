import React, {Component} from 'react';


class Table extends Component {


    onRemoveItems = (i) => e => {
        e.preventDefault();
        const items = [
            ...this.state.items.slice(0, i),
            ...this.state.items.slice(i + 1)
        ];
        this.setState({
            items
        })
    };


    render() {
        const { items } = this.props;

        return (
            <div id="cartList">
                <table>
                   <thead>
                    <tr>
                        <th>Date</th>
                        <th>Way</th>
                        <th>Remove</th>
                    </tr>
                   </thead>
                    <tbody>
                    {items.map((item,  i) => {
                        return (

                            <tr key={i}>
                                <td >{item.date}</td>
                                <td >{item.way}</td>
                                <td><button className="btn" onClick={() => this.onRemoveItems.bind(i)}>&#10008;</button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;