import React, {Component} from 'react';


class Table extends Component {

    handleRemoveItem = date => () => {
        this.props.onRemoveItem(date);
    };
    render() {
        const {items} = this.props;

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
                    {items.reverse().map((item, i) => {
                        return (

                            <tr key={i}>
                                <td>{item.date}</td>
                                <td>{item.way}</td>
                                <td>
                                    <button className="btn" onClick={this.handleRemoveItem(item.date)}>
                                        &#10008;
                                    </button>
                                </td>
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