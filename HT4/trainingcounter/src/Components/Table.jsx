import React, {Component} from 'react';


class Table extends Component {

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
                                <td className="btn" onClick={this.props.onRemoveItems.bind(this)}>&#10008;</td>
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