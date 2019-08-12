import React, { Component } from "react";

export default class FormItem extends Component{

    render(){

        const training = this.props.training;

        console.dir("FormItem render", training);
        return(
<div>
            {training.map(item => {
                    return (
                        <tr>
                            <td>{item.date}</td>
                            <td>{item.way}</td>
                        </tr>
                    );
            })}</div>

        )
    }
}